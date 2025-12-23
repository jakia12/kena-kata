import { Container } from "@/components/shared/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";

export default function CategoryPage({ params }) {
  const title = params.slug.replace(/-/g, " ");
  const filtered = products.filter((p) => p.categorySlug === params.slug);

  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>
          <p className="mt-1 text-sm text-slate-500">
            Clean, filter-ready layout (UI only)
          </p>
        </div>

        <div className="flex gap-2">
          <div className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600">
            Sort: Popular
          </div>
          <div className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600">
            Filter
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {(filtered.length ? filtered : products.slice(0, 10)).map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Container>
  );
}
