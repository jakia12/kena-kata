import { products } from "@/data/products";
import Link from "next/link";
import { Container } from "../shared/Container";

function Row({ title, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <Link
          href="/search"
          className="text-xs text-emerald-700 hover:text-emerald-800"
        >
          View
        </Link>
      </div>
      <div className="mt-4 space-y-3">
        {items.slice(0, 4).map((p) => (
          <div key={p.slug} className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center">
              🍎
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm">{p.name}</div>
              <div className="text-xs text-slate-500">
                ${p.price.toFixed(2)}
              </div>
            </div>
            <div className="text-xs rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 border border-emerald-100">
              {p.tag ?? "Fresh"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductRows() {
  return (
    <Container className="mt-10">
      <div className="grid gap-4 lg:grid-cols-4">
        <Row title="Top Selling" items={products.slice(0, 6)} />
        <Row title="Trending Products" items={products.slice(3, 9)} />
        <Row title="Recently added" items={products.slice(5, 11)} />
        <Row title="Top Rated" items={products.slice(1, 7)} />
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-emerald-50 p-6 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xl font-semibold tracking-tight">
            Stay home & get your daily needs from our shop
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Start your daily shopping with NestMart
          </p>
          <div className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-slate-600 border border-emerald-100">
            Your email address
            <span className="ml-3 rounded-full bg-emerald-600 px-3 py-1 text-white text-xs">
              Subscribe
            </span>
          </div>
        </div>
        <div className="grid place-items-center rounded-2xl bg-white border border-emerald-100 p-8">
          <div className="text-6xl">🧑‍🌾🥬</div>
        </div>
      </div>
    </Container>
  );
}
