import Link from "next/link";
import { Mail } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Logo } from "@/components/Logo";

const footerLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Request a Demo", href: "/demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#F7EAD0] bg-[#3B2415] text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
            DigitalSeva provides modern constituent, payment, donation, volunteer, service, and
            administrative tools for nonprofit and faith-based organizations.
          </p>
          <a
            href={`mailto:${siteContent.brand.email}`}
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#D4A017]"
          >
            <Mail className="size-4" />
            {siteContent.brand.email}
          </a>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-md text-white/76 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-sm text-white/58">
          Copyright {new Date().getFullYear()} DigitalSeva. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
