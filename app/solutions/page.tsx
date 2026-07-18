import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "DigitalSeva supports global nonprofits, NGOs, charities, foundations, temples, churches, mosques, synagogues, community centers, and cultural organizations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading eyebrow="Solutions" title="For Organizations That Serve People, Not Software">
        <p>
          The platform is inclusive by design for organizations around the world. Configure labels,
          programs, content, and workflows around the language and needs of your community.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {siteContent.solutions.map((solution) => (
          <Card key={solution.title}>
            <IconBadge icon={solution.icon} />
            <h2 className="mt-5 text-xl font-black text-[#3B2415]">{solution.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#6B4B2A]">{solution.text}</p>
            <p className="mt-4 text-sm font-bold text-[#8B1E3F]">{solution.examples}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/contact">Talk About Your Organization</ButtonLink>
      </div>
    </section>
  );
}
