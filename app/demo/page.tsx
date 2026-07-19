import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Request a Demo",
  description:
    "Request a DigitalSeva demo for nonprofit platform, SEO, marketing, AI automation, and custom software support.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Request a Demo", path: "/demo" }]} />
      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading as="h1" eyebrow="Request a demo" title="See DigitalSeva Before You Decide">
          <p>
            Share a few details about your organization. We will review your needs, show the existing
            platform capabilities for nonprofits worldwide, and explain available SEO, digital
            marketing, AI automation, custom software, and annual service options.
          </p>
        </SectionHeading>
        <LeadForm />
      </section>
    </>
  );
}
