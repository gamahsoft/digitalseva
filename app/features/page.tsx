import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/app/page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "Explore DigitalSeva features for global nonprofits, NGOs, charities, and faith-based organizations, including constituent management, online giving, front-desk payments, volunteers, services, reporting, and roles.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <section className="section-shell py-16">
        <SectionHeading eyebrow="Features" title="Nonprofit Operations Built Into One Responsive Platform">
          <p>
            DigitalSeva gives nonprofits, NGOs, charities, and faith-based organizations a practical
            foundation for everyday administration, payment workflows, constituent service,
            donations, volunteers, and reporting.
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
