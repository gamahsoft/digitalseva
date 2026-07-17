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
        <div className="section-shell grid gap-8 pb-12 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-14 lg:pt-10">
          <div>
            <p className="mb-3 max-w-3xl text-sm font-extrabold uppercase tracking-normal text-[#8B1E3F]">
              {siteContent.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-4xl font-black tracking-normal text-[#3B2415] sm:text-5xl lg:text-[3.35rem] lg:leading-tight">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A2E0C] lg:text-lg">{siteContent.hero.body}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={siteContent.hero.secondaryCta.href} variant="secondary">
                {siteContent.hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-2xl rounded-lg border border-[#F7EAD0] bg-white px-4 py-3 text-sm font-bold leading-6 text-[#3B2415]">
              {siteContent.hero.offer}
            </p>
          </div>
          <div className="pattern-card relative rounded-lg border border-[#F7EAD0] p-4 shadow-sm">
            <div className="rounded-lg bg-[#3B2415] p-3 text-white shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/brand/digitalseva-mark.png"
                    alt=""
                    className="size-10 rounded-full border border-white/20 object-cover"
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
                  <div key={label} className="rounded-lg bg-white/9 p-3">
                    <p className="text-xs text-white/58">{label}</p>
                    <p className="mt-1 text-xl font-black text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-white p-3 text-[#3B2415]">
                <p className="text-sm font-black">Today at the front desk</p>
                <div className="mt-2 grid gap-1.5">
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

      <section className="border-y border-[#F7EAD0] bg-white/82 py-9">
        <div className="section-shell">
          <p className="text-center text-sm font-extrabold uppercase tracking-normal text-[#5A2E0C]">
            Built for nonprofits, faith communities, and service organizations worldwide
          </p>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
            {siteContent.organizations.map((organization) => (
              <div key={organization.label} className="group text-center">
                <AudienceIcon type={organization.icon} />
                <p className="mt-3 text-sm font-bold leading-5 text-[#3B2415]">{organization.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-8 pt-10">
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

      <section className="section-shell pb-14 pt-8">
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

      <section className="bg-white py-14">
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

      <section className="section-shell py-14">
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

      <section className="bg-[#FFF6E6] py-14">
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

      <section id="how-it-works" className="section-shell scroll-mt-24 py-14">
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

      <section className="bg-[#3B2415] py-14 text-white">
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

      <section className="section-shell py-14">
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

      <section className="bg-[#FFF6E6] py-14">
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

function AudienceIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#FFF6E6] text-[#8B1E3F] ring-1 ring-[#F7EAD0] transition group-hover:-translate-y-0.5 group-hover:text-[#6f1732] group-hover:shadow-sm">
      <svg viewBox="0 0 64 64" className="size-11" aria-hidden="true">
        {type === "temple" && (
          <>
            <path {...common} d="M14 48h36M18 48V28l14-10 14 10v20M24 48V34h16v14" />
            <path {...common} d="M20 28h24M24 22h16M28 16h8M32 8v8" />
            <path {...common} d="M16 34h32" />
          </>
        )}
        {type === "church" && (
          <>
            <path {...common} d="M14 50h36M20 50V28l12-10 12 10v22M27 50V38h10v12" />
            <path {...common} d="M32 10v14M26 16h12" />
            <path {...common} d="M20 30h24" />
          </>
        )}
        {type === "mosque" && (
          <>
            <path {...common} d="M12 50h40M18 50V32c0-8 6-14 14-14s14 6 14 14v18" />
            <path {...common} d="M24 50V36h16v14M14 50V28M50 50V28" />
            <path {...common} d="M12 28h4M48 28h4M32 10c-4 2-6 5-6 9M38 12c-2-2-4-3-6-3" />
          </>
        )}
        {type === "synagogue" && (
          <>
            <path {...common} d="M12 50h40M18 50V30h28v20M24 50V38h16v12" />
            <path {...common} d="m32 12 4 8h8l-6 6 3 8-9-5-9 5 3-8-6-6h8l4-8Z" />
          </>
        )}
        {type === "community" && (
          <>
            <path {...common} d="M12 50h40M18 50V28h28v22M24 50V38h16v12" />
            <path {...common} d="M16 28h32l-16-12-16 12ZM22 34h4M30 34h4M38 34h4" />
          </>
        )}
        {type === "culture" && (
          <>
            <path {...common} d="M18 46c6-10 22-10 28 0M24 42c-7-6-8-16-2-24 8 2 13 8 10 18M40 42c7-6 8-16 2-24-8 2-13 8-10 18" />
            <path {...common} d="M32 18v30M22 50h20" />
          </>
        )}
        {type === "charity" && (
          <>
            <path {...common} d="M20 34c-5 0-8 3-8 7v7h16l8-7" />
            <path {...common} d="M44 34c5 0 8 3 8 7v7H36l-8-7" />
            <path {...common} d="M32 35 21 24c-4-5 3-13 11-6 8-7 15 1 11 6L32 35Z" />
          </>
        )}
        {type === "foundation" && (
          <>
            <path {...common} d="M12 50h40M16 44h32M20 44V28M30 44V28M40 44V28M16 28h32" />
            <path {...common} d="m32 12 19 10H13l19-10Z" />
          </>
        )}
        {type === "volunteer" && (
          <>
            <path {...common} d="M20 30a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM44 30a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
            <path {...common} d="M9 50c2-10 8-16 18-16M55 50c-2-10-8-16-18-16" />
            <path {...common} d="M32 47 22 37c-4-4 2-10 10-4 8-6 14 0 10 4L32 47Z" />
          </>
        )}
      </svg>
    </span>
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
    <section className="bg-white py-14">
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
