import nodemailer from "nodemailer";
import { siteContent } from "@/lib/content";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  organizationName: string;
  organizationType: string;
  priority: string;
  timeline: string;
  message: string;
  website?: string;
};

const requiredFields: Array<keyof Omit<ContactFormPayload, "phone" | "website">> = [
  "name",
  "email",
  "organizationName",
  "organizationType",
  "priority",
  "timeline",
  "message",
];

function clean(value: unknown) {
  return String(value ?? "").trim();
}

export function contactPayloadFromJson(data: unknown): ContactFormPayload {
  const source = data && typeof data === "object" ? (data as Record<string, unknown>) : {};

  return {
    name: clean(source.name),
    email: clean(source.email),
    phone: clean(source.phone),
    organizationName: clean(source.organizationName),
    organizationType: clean(source.organizationType),
    priority: clean(source.priority),
    timeline: clean(source.timeline),
    message: clean(source.message),
    website: clean(source.website),
  };
}

export function validateContactPayload(payload: ContactFormPayload): string | null {
  if (payload.website) {
    return "Thanks. Your request could not be accepted. Please email us directly if you need help.";
  }

  const missingField = requiredFields.find((field) => !payload[field]);

  if (missingField) {
    return "Please complete all required fields before sending your demo request.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

function getSmtpPort() {
  const rawPort = process.env.SMTP_PORT;
  const port = rawPort ? Number(rawPort) : 587;

  return Number.isFinite(port) ? port : 587;
}

function getMailSettings() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = getSmtpPort();

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
    to: process.env.CONTACT_TO_EMAIL || siteContent.brand.email,
    from: process.env.CONTACT_FROM_EMAIL || user,
  };
}

function buildEmailBody(payload: ContactFormPayload) {
  return [
    "New DigitalSeva demo request",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Organization: ${payload.organizationName}`,
    `Organization type: ${payload.organizationType}`,
    `Priority: ${payload.priority}`,
    `Timeline: ${payload.timeline}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

export async function sendContactEmail(payload: ContactFormPayload): Promise<ContactFormState> {
  const validationError = validateContactPayload(payload);

  if (validationError) {
    return { ok: false, message: validationError };
  }

  const settings = getMailSettings();

  if (!settings) {
    return {
      ok: false,
      message: "Email settings are not configured yet. Please add SMTP details before going live.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.secure,
    auth: settings.auth,
  });

  await transporter.sendMail({
    to: settings.to,
    from: settings.from,
    replyTo: payload.email,
    subject: `DigitalSeva demo request from ${payload.organizationName}`,
    text: buildEmailBody(payload),
  });

  return {
    ok: true,
    message: "Thanks. Your demo request was sent successfully.",
  };
}
