import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about DigitalSeva, an AI-powered platform for nonprofit, NGO, charity, foundation, and faith-based administration worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading as="h1" eyebrow="About DigitalSeva" title="Built for Service-Focused Organizations">
        <p>
          DigitalSeva exists to help nonprofit, NGO, charity, foundation, and faith-based
          organizations around the world modernize everyday operations without funding a long
          custom-software project from the beginning.
        </p>
        <p className="mt-4">
          The platform focuses on practical work: constituent records, payments, donation
          opportunities, front-desk support, services and programs, volunteers, and reporting. The
          design remains inclusive for NGOs, foundations, temples, churches, mosques, synagogues,
          cultural groups, charitable organizations, and community nonprofits.
        </p>
      </SectionHeading>
      <div className="mt-10 rounded-lg border border-[#F7EAD0] bg-white p-6 text-sm leading-7 text-[#5A2E0C]">
        DigitalSeva provides standard platform capabilities without an upfront software license fee.
        Affordable annual hosting, maintenance, support, configuration, and website-management plans
        are available for nonprofits.
      </div>
      <div className="mt-8">
        <ButtonLink href="/demo">Request a Free Demo</ButtonLink>
      </div>
    </section>
  );
}
