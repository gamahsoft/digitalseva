import { Mail } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact DigitalSeva for nonprofit platform, SEO, digital marketing, AI automation, and custom software needs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading as="h1" eyebrow="Contact" title="Tell Us How Your Organization Serves">
            <p>
              Use the form to request a demo or ask about DigitalSeva for your nonprofit, NGO,
              faith-based, charitable, foundation, or cultural organization. We can review platform,
              SEO, digital marketing, social media marketing, AI automation, and custom software needs.
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
    </>
  );
}
