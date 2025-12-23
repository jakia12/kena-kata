import Link from "next/link";

export function CategoryCard({
  category,
}: {
  category
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-4 hover:border-emerald-200 hover:shadow-sm transition"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 border border-emerald-100 text-2xl">
          {category.emoji}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold group-hover:text-emerald-700">
            {category.name}
          </div>
          <div className="text-xs text-slate-500">{category.count} items</div>
        </div>
      </div>
    </Link>
  );
}
