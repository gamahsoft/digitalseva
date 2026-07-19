import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Affordable DigitalSeva plans for nonprofit platforms, SEO, marketing, AI automation, and custom software support.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <section className="section-shell py-16">
        <SectionHeading as="h1" eyebrow="Pricing" title="No Upfront Software License Fee for Standard Platform Capabilities">
          <p>
            Affordable annual plans may cover hosting, maintenance, support, configuration, website
            management, SEO, digital marketing, AI automation, and nonprofit platform support. Custom
            development, third-party fees, payment processing, hardware, migration, and premium
            integrations may require separate pricing.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {siteContent.pricing.map((plan) => (
            <Card key={plan.name}>
              <h2 className="text-2xl font-black text-[#3B2415]">{plan.name}</h2>
              <p className="mt-2 text-lg font-extrabold text-[#8B1E3F]">{plan.price}</p>
              <p className="mt-4 text-sm leading-7 text-[#6B4B2A]">{plan.description}</p>
              <ul className="mt-5 grid gap-3 text-sm font-semibold text-[#5A2E0C]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-[#8B1E3F]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-[#F7EAD0] bg-[#FFF6E6] p-5 text-sm font-semibold leading-7 text-[#5A2E0C]">
          DigitalSeva does not claim unlimited custom development, guaranteed fundraising results,
          guaranteed search rankings, guaranteed uptime, or no payment-processing fees. Final service
          scope should be confirmed in the customer agreement.
        </div>
        <div className="mt-8">
          <ButtonLink href="/demo">Request Pricing Review</ButtonLink>
        </div>
      </section>
    </>
  );
}
