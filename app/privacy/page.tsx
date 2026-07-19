import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Starter privacy policy for DigitalSeva. Legal review is required before launch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
      <section className="section-shell py-16">
        <SectionHeading as="h1" eyebrow="Privacy Policy" title="Starter Privacy Policy">
          <p>
            This starter policy is provided for planning purposes and must be reviewed by qualified
            legal counsel before production launch.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-6 rounded-lg border border-[#F7EAD0] bg-white p-6 text-sm leading-7 text-[#5A2E0C]">
          {/* TODO: Replace starter legal content with attorney-reviewed policies before production launch. */}
          <p>
            DigitalSeva may collect contact information submitted through this website, including
            name, email address, phone number, organization name, organization type, priorities,
            timeline, and message details.
          </p>
          <p>
            Submitted information is used to respond to inquiries, schedule demos, review platform
            fit, and communicate about DigitalSeva products and services. DigitalSeva does not sell
            submitted lead-form information.
          </p>
          <p>
            If analytics or tracking tools are enabled later, this policy should be updated to explain
            what information is collected, why it is collected, and how users can manage choices.
          </p>
          <p>
            This website may use essential cookies needed for basic site operation. Optional analytics
            cookies should only be used after a visitor accepts them through the cookie preference
            banner. If a visitor denies optional cookies, that choice is stored locally in the browser
            so the banner does not keep reappearing.
          </p>
          <p>
            Organizations using the platform may have separate agreements, data-processing terms,
            payment-processing terms, and operational policies.
          </p>
        </div>
      </section>
    </>
  );
}
