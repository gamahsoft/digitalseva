"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useEffect, useState } from "react";

const consentKey = "digitalseva-cookie-consent";

type ConsentChoice = "accepted" | "denied";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const existingChoice = window.localStorage.getItem(consentKey);
      setIsVisible(existingChoice !== "accepted" && existingChoice !== "denied");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function saveChoice(choice: ConsentChoice) {
    window.localStorage.setItem(consentKey, choice);
    window.dispatchEvent(new CustomEvent("digitalseva-cookie-consent", { detail: choice }));
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#F7EAD0] bg-[#FFF6E6]/96 shadow-[0_-18px_48px_rgba(59,36,21,0.16)] backdrop-blur"
      aria-label="Cookie consent"
    >
      <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-3">
          <span
            className="mt-1 grid size-10 shrink-0 place-items-center rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F]"
            aria-hidden="true"
          >
            <Cookie className="size-5" />
          </span>
          <div>
            <h2 className="text-base font-black text-[#3B2415]">Cookie Preferences</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-[#5A2E0C]">
              We use essential cookies to keep the website working. With your permission, we may use
              optional analytics cookies to understand site usage and improve DigitalSeva. You can
              accept or deny optional cookies. Read our{" "}
              <Link href="/privacy" className="font-extrabold text-[#8B1E3F] underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-lg border border-[#8B1E3F]/25 bg-white px-4 py-2 text-sm font-extrabold text-[#8B1E3F] transition hover:border-[#8B1E3F] hover:bg-[#8B1E3F]/8"
            onClick={() => saveChoice("denied")}
          >
            Deny Optional
          </button>
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-lg bg-[#D4A017] px-4 py-2 text-sm font-extrabold text-[#3B2415] transition hover:bg-[#F4C056]"
            onClick={() => saveChoice("accepted")}
          >
            Accept Cookies
          </button>
          <button
            type="button"
            className="focus-ring grid size-11 place-items-center rounded-lg border border-[#F7EAD0] bg-white text-[#5A2E0C] transition hover:text-[#8B1E3F]"
            aria-label="Close cookie preferences and deny optional cookies"
            onClick={() => saveChoice("denied")}
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
