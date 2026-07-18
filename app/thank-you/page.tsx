import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Thank You",
  description: "Thank you for contacting DigitalSeva.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="section-shell py-20">
      <SectionHeading eyebrow="Thank you" title="Your DigitalSeva Request Has Been Received">
        <p>
          Thank you for reaching out. We will review your organization details and follow up about
          the platform, demo options, and annual service plan.
        </p>
      </SectionHeading>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Return Home</ButtonLink>
        <ButtonLink href="/features" variant="secondary">
          Explore Features
        </ButtonLink>
      </div>
    </section>
  );
}
