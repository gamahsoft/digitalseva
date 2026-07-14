import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-sm font-extrabold transition",
        variant === "primary" &&
          "bg-[#D4A017] text-[#3B2415] shadow-sm hover:bg-[#F4C056] hover:text-[#3B2415]",
        variant === "secondary" &&
          "border border-[#8B1E3F]/30 bg-white text-[#8B1E3F] hover:border-[#8B1E3F] hover:bg-[#8B1E3F]/8",
        variant === "dark" && "bg-[#3B2415] text-white hover:bg-[#2B160B] hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}
