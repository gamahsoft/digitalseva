import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

export default function NotFound() {
  return (
    <section className="section-shell py-20">
      <SectionHeading as="h1" eyebrow="Page not found" title="This DigitalSeva Page Is Not Available">
        <p>The page may have moved, or the link may be incorrect.</p>
      </SectionHeading>
      <div className="mt-8">
        <ButtonLink href="/">Return Home</ButtonLink>
      </div>
    </section>
  );
}
