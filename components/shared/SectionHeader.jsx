import Link from "next/link";

export function SectionHeader({
  title,
  subtitle,
  rightHref,
  rightLabel = "View all",
}: {
  title: string,
  subtitle?: string,
  rightHref?: string,
  rightLabel?: string,
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>
      {rightHref ? (
        <Link
          href={rightHref}
          className="text-sm text-emerald-700 hover:text-emerald-800"
        >
          {rightLabel} →
        </Link>
      ) : null}
    </div>
  );
}
