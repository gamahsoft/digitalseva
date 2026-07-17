"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F7EAD0] bg-[#FFF6E6]/94 backdrop-blur">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-lg" aria-label="DigitalSeva home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[#5A2E0C] lg:flex">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md hover:text-[#8B1E3F]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/demo">Request a Free Demo</ButtonLink>
        </div>
        <button
          className="focus-ring grid size-11 place-items-center rounded-lg border border-[#F7EAD0] bg-white text-[#3B2415] lg:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-[#F7EAD0] bg-[#FFF6E6] lg:hidden">
          <nav className="section-shell grid gap-2 py-5 text-base font-bold">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 hover:bg-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="focus-ring mt-2 rounded-lg bg-[#D4A017] px-4 py-3 text-center font-extrabold text-[#3B2415]"
              onClick={() => setIsOpen(false)}
            >
              Request a Free Demo
            </Link>
          </nav>
        </div>
      )}
      <div className="header-ornament-divider" aria-hidden="true" />
    </header>
  );
}
