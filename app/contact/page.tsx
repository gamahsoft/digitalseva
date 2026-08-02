import { Mail, Phone } from "lucide-react";
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
      <section className="section-shell grid gap-7 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:py-12">
        <div>
          <SectionHeading as="h1" eyebrow="Contact" title="Tell Us How Your Organization Serves">
            <p>
              Use the form to request a demo or ask about DigitalSeva for your nonprofit, NGO,
              faith-based, charitable, foundation, or cultural organization. We can review platform,
              SEO, digital marketing, social media marketing, AI automation, and custom software needs.
            </p>
          </SectionHeading>
          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${siteContent.brand.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg font-extrabold text-[#8B1E3F]"
            >
              <Mail className="size-5" />
              {siteContent.brand.email}
            </a>
            {siteContent.brand.phone && siteContent.brand.phoneHref && (
              <a
                href={siteContent.brand.phoneHref}
                className="focus-ring inline-flex items-center gap-2 rounded-lg font-extrabold text-[#8B1E3F]"
              >
                <Phone className="size-5" />
                {siteContent.brand.phone}
              </a>
            )}
            {siteContent.brand.availability && (
              <p className="text-base font-semibold leading-7 text-[#3B2415]">
                <strong className="font-extrabold">Availability:</strong> {siteContent.brand.availability}
              </p>
            )}
          </div>
        </div>
        <LeadForm />
      </section>
    </>
  );
}
