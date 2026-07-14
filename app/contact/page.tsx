import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DigitalSeva to discuss nonprofit, NGO, charity, foundation, or faith-based organization platform needs worldwide, or request a free demo.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <SectionHeading eyebrow="Contact" title="Tell Us How Your Organization Serves">
          <p>
            Use the form to request a demo or ask about DigitalSeva for your nonprofit, NGO,
            faith-based, charitable, foundation, or cultural organization.
          </p>
        </SectionHeading>
        <a
          href={`mailto:${siteContent.brand.email}`}
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg font-extrabold text-[#8B1E3F]"
        >
          <Mail className="size-5" />
          {siteContent.brand.email}
        </a>
      </div>
      <LeadForm />
    </section>
  );
}
