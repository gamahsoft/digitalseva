import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a DigitalSeva demo for your nonprofit, NGO, charity, foundation, or faith-based organization and review the global platform before deciding.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <SectionHeading eyebrow="Request a demo" title="See DigitalSeva Before You Decide">
        <p>
          Share a few details about your organization. We will review your needs, show the existing
          platform capabilities for nonprofits worldwide, and explain the annual service plan.
        </p>
      </SectionHeading>
      <LeadForm />
    </section>
  );
}
