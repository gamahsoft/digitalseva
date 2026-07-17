"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const consentKey = "digitalseva-cookie-consent";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-93QW7FM2KC";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasConsent(window.localStorage.getItem(consentKey) === "accepted");
    });

    function handleConsent(event: Event) {
      const consentEvent = event as CustomEvent<"accepted" | "denied">;
      setHasConsent(consentEvent.detail === "accepted");
    }

    window.addEventListener("digitalseva-cookie-consent", handleConsent);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("digitalseva-cookie-consent", handleConsent);
    };
  }, []);

  if (!measurementId || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-manager"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
