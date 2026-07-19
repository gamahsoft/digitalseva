import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about DigitalSeva, an AI-powered partner for nonprofit platforms, SEO, marketing, automation, and custom software.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <section className="section-shell py-16">
        <SectionHeading as="h1" eyebrow="About DigitalSeva" title="Built for Service-Focused Organizations">
          <p>
            DigitalSeva exists to help nonprofit, NGO, charity, foundation, and faith-based
            organizations around the world modernize operations, improve digital visibility, automate
            workflows, and build practical software without funding a long custom-software project
            from the beginning.
          </p>
          <p className="mt-4">
            The work focuses on practical outcomes: constituent records, payments, donation
            opportunities, front-desk support, services and programs, volunteers, reporting, SEO,
            digital marketing, social media marketing, AI automation, and custom software. The design
            remains inclusive for NGOs, foundations, temples, churches, mosques, synagogues, cultural
            groups, charitable organizations, and community nonprofits.
          </p>
        </SectionHeading>
        <div className="mt-10 rounded-lg border border-[#F7EAD0] bg-white p-6 text-sm leading-7 text-[#5A2E0C]">
          DigitalSeva provides standard platform capabilities without an upfront software license fee.
          Affordable annual hosting, maintenance, support, configuration, marketing, automation, and
          website-management plans are available for nonprofits.
        </div>
        <div className="mt-8">
          <ButtonLink href="/demo">Request a Free Demo</ButtonLink>
        </div>
      </section>
    </>
  );
}
