import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";
import { JsonLd } from "@/lib/seo";

export default function HomePage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <section className="brand-hero overflow-hidden border-b border-[#F7EAD0]">
        <div className="temple-border h-2" />
        <div className="section-shell grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 max-w-3xl text-sm font-extrabold uppercase tracking-normal text-[#8B1E3F]">
              {siteContent.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-black tracking-normal text-[#3B2415] sm:text-5xl lg:text-6xl">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A2E0C]">{siteContent.hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={siteContent.hero.secondaryCta.href} variant="secondary">
                {siteContent.hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-2xl rounded-lg border border-[#F7EAD0] bg-white px-4 py-3 text-sm font-bold leading-6 text-[#3B2415]">
              {siteContent.hero.offer}
            </p>
          </div>
          <div className="pattern-card relative rounded-lg border border-[#F7EAD0] p-5 shadow-sm">
            <div className="rounded-lg bg-[#3B2415] p-4 text-white shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/brand/digitalseva-mark.png"
                    alt=""
                    className="size-12 rounded-full border border-white/20 object-cover"
                    aria-hidden="true"
                  />
                  <div>
                  <p className="text-sm font-bold text-[#D4A017]">DigitalSeva dashboard</p>
                  <p className="text-xs text-white/58">Community operations overview</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#8B1E3F] px-3 py-1 text-xs font-bold">Ready</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Constituents", "1,248"],
                  ["This month giving", "$18.6k"],
                  ["Volunteer signups", "76"],
                  ["Service payments", "214"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-white/9 p-4">
                    <p className="text-xs text-white/58">{label}</p>
                    <p className="mt-2 text-2xl font-black text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white p-4 text-[#3B2415]">
                <p className="text-sm font-black">Today at the front desk</p>
                <div className="mt-3 grid gap-2">
                  {["Donation received", "Family profile updated", "Volunteer interest submitted"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#5A2E0C]">
                      <CheckCircle2 className="size-4 text-[#8B1E3F]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.organizations.map((organization) => (
            <div
              key={organization}
              className="rounded-lg border border-[#F7EAD0] bg-white px-4 py-3 text-sm font-extrabold text-[#3B2415]"
            >
              {organization}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="rounded-lg border border-[#F7EAD0] bg-white p-6 shadow-sm lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-normal text-[#8B1E3F]">
              Worldwide nonprofit reach
            </p>
            <h2 className="mt-3 text-2xl font-black text-[#3B2415] sm:text-3xl">
              Built for community-serving organizations wherever they operate
            </h2>
          </div>
          <p className="mt-4 text-base leading-8 text-[#5A2E0C] lg:mt-0">
            DigitalSeva is positioned for nonprofits, NGOs, charities, foundations,
            faith-based organizations, cultural groups, and volunteer-led communities across the
            world. The platform language can be adapted to your organization, while the standard
            workflows keep constituent, giving, service, volunteer, and reporting operations simple.
          </p>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Prebuilt value" title="Start With a Platform That Is Already Built">
          <p>
            Many nonprofits spend significant time and money assembling separate tools for records,
            payments, donations, volunteers, events, and reporting. DigitalSeva brings these
            capabilities together in one platform.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.valueCards.map((card) => (
            <Card key={card.title}>
              <IconBadge icon={card.icon} />
              <h3 className="mt-5 text-lg font-black text-[#3B2415]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B4B2A]">{card.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Platform features" title="Essential Nonprofit Tools in One Place" centered>
            <p>Use the existing standard capabilities to support constituents, administrators, and front-desk teams.</p>
          </SectionHeading>
          <FeatureGrid limit={10} />
          <div className="mt-9 text-center">
            <ButtonLink href="/demo">See the Platform in Action</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="User experience" title="One Platform, Multiple Ways to Serve Your Community" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {siteContent.userGroups.map((group) => (
            <Card key={group.title}>
              <IconBadge icon={group.icon} />
              <h3 className="mt-5 text-xl font-black text-[#3B2415]">{group.title}</h3>
              <ul className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-[#5A2E0C]">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#8B1E3F]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF6E6] py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Solutions" title="Designed for Faith-Based, Cultural, and Charitable Work" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.solutions.map((solution) => (
              <Card key={solution.title}>
                <IconBadge icon={solution.icon} />
                <h3 className="mt-5 text-xl font-black text-[#3B2415]">{solution.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B4B2A]">{solution.text}</p>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-normal text-[#8B1E3F]">
                  {solution.examples}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell scroll-mt-24 py-16">
        <SectionHeading eyebrow="How it works" title="From Demo to Launch Without Starting From Scratch" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.process.map((step, index) => (
            <Card key={step.title}>
              <div className="grid size-10 place-items-center rounded-full bg-[#D4A017] text-sm font-black text-[#3B2415]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-black text-[#3B2415]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B4B2A]">{step.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#3B2415] py-16 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Annual service plan" title="What the Annual Service Covers" inverse>
            <p className="text-white/72">
              The standard platform avoids an upfront software license fee, while the annual service
              plan keeps the website managed, maintained, and supported.
            </p>
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.annualCoverage.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white/8 p-4 text-sm font-bold text-white/84">
                <CheckCircle2 className="size-5 shrink-0 text-[#D4A017]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Pricing" title="Simple Offer, Clear Boundaries" centered>
          <p>
            DigitalSeva is not positioned as a traditional upfront software-license purchase.
            Affordable annual hosting, maintenance, support, configuration, and website-management
            plans are available for nonprofits.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {siteContent.pricing.map((plan) => (
            <Card key={plan.name}>
              <h3 className="text-2xl font-black text-[#3B2415]">{plan.name}</h3>
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
      </section>

      <FAQSection />

      <section className="bg-[#FFF6E6] py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Request a demo" title="Ready to Modernize the Way Your Organization Serves Its Community?">
              <p>
                Tell us about your current processes and priorities. We will show you the platform,
                review your needs, and explain the annual service options available for your organization.
              </p>
            </SectionHeading>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#8B1E3F]">
              Get Started With DigitalSeva
              <ArrowRight className="size-4" />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

export function FeatureGrid({ limit }: { limit?: number }) {
  const features = typeof limit === "number" ? siteContent.features.slice(0, limit) : siteContent.features;

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title}>
          <IconBadge icon={feature.icon} />
          <h3 className="mt-5 text-lg font-black text-[#3B2415]">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#6B4B2A]">{feature.text}</p>
        </Card>
      ))}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Common Questions Before a Demo" centered />
        <div className="mx-auto mt-8 grid max-w-4xl gap-3">
          {siteContent.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-[#F7EAD0] bg-[#FFF6E6] p-5">
              <summary className="focus-ring cursor-pointer rounded-md text-base font-black text-[#3B2415]">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#6B4B2A]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
