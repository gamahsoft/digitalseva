import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Starter terms of service for DigitalSeva. Legal review is required before launch.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading eyebrow="Terms of Service" title="Starter Terms of Service">
        <p>
          These starter terms are not final legal terms and must be reviewed by qualified legal
          counsel before production launch.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-6 rounded-lg border border-[#F7EAD0] bg-white p-6 text-sm leading-7 text-[#5A2E0C]">
        {/* TODO: Replace starter legal content with attorney-reviewed policies before production launch. */}
        <p>
          DigitalSeva provides information about a prebuilt nonprofit-management platform for
          eligible organizations. Website content does not create a binding service agreement.
        </p>
        <p>
          Existing standard platform functionality may be offered without an upfront software
          license fee. Affordable annual hosting, maintenance, support, configuration, and
          website-management plans are available for nonprofits.
        </p>
        <p>
          Payment-processing, banking, chargeback, hardware, third-party services, custom
          development, migration, premium integrations, and organization-specific requirements may
          require separate pricing and agreements.
        </p>
        <p>
          DigitalSeva does not guarantee fundraising results, regulatory compliance, uninterrupted
          availability, or unlimited future features. Final scope, responsibilities, fees, and
          service levels should be documented in the customer agreement.
        </p>
      </div>
    </section>
  );
}
