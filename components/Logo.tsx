import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Logo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#F7EAD0] bg-[#FFF6E6] shadow-sm">
        <img
          src="/images/brand/digitalseva-mark.png"
          alt="DigitalSeva logo"
          className="h-full w-full object-cover"
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span
            className={cn(
              "block font-serif text-xl font-black tracking-normal",
              inverse ? "text-[#FFF6E6]" : "text-[#3B2415]",
            )}
          >
            {siteContent.brand.name}
          </span>
          <span
            className={cn(
              "mt-0.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-normal",
              inverse ? "text-[#F4C056]" : "text-[#8B1E3F]",
            )}
          >
            <span>Serve</span>
            <span className={cn("size-1 rounded-full", inverse ? "bg-[#D4A017]" : "bg-[#D4A017]")} aria-hidden="true" />
            <span>Manage</span>
            <span className={cn("size-1 rounded-full", inverse ? "bg-[#D4A017]" : "bg-[#D4A017]")} aria-hidden="true" />
            <span>Grow</span>
          </span>
        </span>
      )}
    </span>
  );
}
