import type { ContactFormPayload } from "@/lib/contact";

type RateBucket = {
  count: number;
  resetAt: number;
};

type ContactGateResult = {
  allowed: boolean;
  status: number;
  ok: boolean;
  message: string;
};

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
  action?: string;
};

const rateBuckets = new Map<string, RateBucket>();
const ipWindowMs = 15 * 60 * 1000;
const emailWindowMs = 60 * 60 * 1000;
const maxIpSubmissions = 5;
const maxEmailSubmissions = 3;

const genericError =
  "Your request could not be accepted right now. Please email sam@digitalseva.us directly if you need help.";

const disposableEmailDomains = new Set([
  "10minutemail.com",
  "20minutemail.com",
  "anonaddy.com",
  "burnermail.io",
  "dispostable.com",
  "emailondeck.com",
  "fakeinbox.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "maildrop.cc",
  "mailinator.com",
  "mohmal.com",
  "sharklasers.com",
  "tempmail.com",
  "tempmail.net",
  "throwawaymail.com",
  "trashmail.com",
  "yopmail.com",
]);

const spamTerms = [
  "backlinks",
  "casino",
  "crypto",
  "forex",
  "guest post",
  "loan",
  "porn",
  "seo package",
  "telegram",
  "viagra",
  "whatsapp",
];

function normalizeIp(rawIp: string | null) {
  return rawIp?.split(",")[0]?.trim() || "unknown";
}

export function getClientIp(request: Request) {
  return normalizeIp(
    request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for"),
  );
}

function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = rateBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > limit;
}

function getEmailDomain(email: string) {
  return email.toLowerCase().split("@").pop() || "";
}

function countMatches(value: string, pattern: RegExp) {
  return value.match(pattern)?.length || 0;
}

function scoreSpam(payload: ContactFormPayload) {
  let score = 0;
  const reasons: string[] = [];
  const text = `${payload.name} ${payload.email} ${payload.phone} ${payload.organizationName} ${payload.message}`.toLowerCase();
  const domain = getEmailDomain(payload.email);
  const startedAt = Number(payload.contactStartedAt);
  const elapsedMs = Number.isFinite(startedAt) ? Date.now() - startedAt : 0;
  const linkCount = countMatches(payload.message, /https?:\/\/|www\./gi);

  if (payload.website || payload.companyWebsite) {
    score += 100;
    reasons.push("honeypot");
  }

  if (disposableEmailDomains.has(domain)) {
    score += 45;
    reasons.push("disposable-email");
  }

  if (linkCount >= 2) {
    score += 30;
    reasons.push("too-many-links");
  }

  if (countMatches(text, /\b(?:http|www|\.ru|\.cn|\.xyz|\.top)\b/gi) >= 3) {
    score += 20;
    reasons.push("spammy-url-patterns");
  }

  if (spamTerms.some((term) => text.includes(term))) {
    score += 35;
    reasons.push("spam-keywords");
  }

  if (payload.message.length < 25) {
    score += 15;
    reasons.push("short-message");
  }

  if (payload.message.length > 1800) {
    score += 25;
    reasons.push("long-message");
  }

  if (/(.)\1{8,}/.test(text)) {
    score += 20;
    reasons.push("repeated-characters");
  }

  if (elapsedMs > 0 && elapsedMs < 2500) {
    score += 25;
    reasons.push("submitted-too-fast");
  }

  return { score, reasons };
}

function getAllowedTurnstileHostnames() {
  return (process.env.TURNSTILE_ALLOWED_HOSTNAMES || "")
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);
}

async function verifyTurnstile(payload: ContactFormPayload, ip: string): Promise<ContactGateResult | null> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKeyConfigured = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  if (!secret && siteKeyConfigured) {
    return { allowed: false, status: 500, ok: false, message: "Spam protection is not configured correctly." };
  }

  if (!secret) {
    return null;
  }

  if (!payload.turnstileToken) {
    return { allowed: false, status: 400, ok: false, message: genericError };
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", payload.turnstileToken);
  formData.append("remoteip", ip);
  formData.append("idempotency_key", crypto.randomUUID());

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { allowed: false, status: 502, ok: false, message: genericError };
  }

  const result = (await response.json()) as TurnstileResponse;

  if (!result.success) {
    return { allowed: false, status: 400, ok: false, message: genericError };
  }

  const allowedHostnames = getAllowedTurnstileHostnames();

  if (allowedHostnames.length && result.hostname && !allowedHostnames.includes(result.hostname.toLowerCase())) {
    return { allowed: false, status: 400, ok: false, message: genericError };
  }

  if (result.action && result.action !== "contact") {
    return { allowed: false, status: 400, ok: false, message: genericError };
  }

  return null;
}

export async function screenContactSubmission(payload: ContactFormPayload, ip: string): Promise<ContactGateResult> {
  if (rateLimit(`ip:${ip}`, maxIpSubmissions, ipWindowMs)) {
    return { allowed: false, status: 429, ok: false, message: "Too many requests. Please try again later." };
  }

  if (payload.email && rateLimit(`email:${payload.email.toLowerCase()}`, maxEmailSubmissions, emailWindowMs)) {
    return { allowed: false, status: 429, ok: false, message: "Too many requests. Please try again later." };
  }

  const turnstileError = await verifyTurnstile(payload, ip);

  if (turnstileError) {
    return turnstileError;
  }

  const spam = scoreSpam(payload);

  if (spam.reasons.includes("honeypot")) {
    return {
      allowed: false,
      status: 200,
      ok: true,
      message: "Thanks. Your demo request was sent successfully.",
    };
  }

  if (spam.score >= 60) {
    return { allowed: false, status: 400, ok: false, message: genericError };
  }

  return { allowed: true, status: 200, ok: true, message: "" };
}
