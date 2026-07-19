import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/app/page";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "AI-powered nonprofit tools for operations, SEO, digital marketing, social media, automation, and custom software support.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />
      <section className="section-shell py-16">
        <SectionHeading as="h1" eyebrow="Features" title="AI-Powered Tools for Nonprofit Operations and Growth">
          <p>
            DigitalSeva gives nonprofits, NGOs, charities, and faith-based organizations a practical
            foundation for administration, payments, constituent service, donations, volunteers,
            reporting, SEO, digital marketing, social media marketing, AI automation, and custom
            software planning.
          </p>
        </SectionHeading>
        <FeatureGrid />
        <div className="mt-10">
          <ButtonLink href="/demo">Request a Free Demo</ButtonLink>
        </div>
      </section>
    </>
  );
}
