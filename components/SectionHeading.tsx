import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as = "h2",
  centered = false,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  as?: "h1" | "h2";
  centered?: boolean;
  inverse?: boolean;
}) {
  const HeadingTag = as;

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-extrabold uppercase tracking-normal ${
            inverse ? "text-[#F4C056]" : "text-[#8B1E3F]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <HeadingTag
        className={`text-3xl font-black tracking-normal sm:text-4xl ${
          inverse ? "text-[#FFF6E6]" : "text-[#3B2415]"
        }`}
      >
        {title}
      </HeadingTag>
      <img
        src="/images/brand/lotus-divider.png"
        alt=""
        className={centered ? "ornament-divider mx-auto" : "ornament-divider"}
        aria-hidden="true"
      />
      {children && (
        <div className={`mt-4 text-base leading-8 sm:text-lg ${inverse ? "text-white/78" : "text-[#5A2E0C]"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
