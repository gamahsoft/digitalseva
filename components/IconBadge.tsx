import type { IconKey } from "@/lib/site";
import { iconMap } from "@/lib/site";

export function IconBadge({ icon, className = "" }: { icon: IconKey; className?: string }) {
  const Icon = iconMap[icon];

  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F] ${className}`}
      aria-hidden="true"
    >
      <Icon className="size-5" />
    </span>
  );
}
