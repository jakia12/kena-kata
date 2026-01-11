"use client";

import { Button } from "@/components/ui/button";
import { useGetProductByIdQuery } from "@/store/api/apiSlice";

const ProductSinglePage = ({ id }) => {
  console.log("id is :", id);
  const { data: p, isLoading, isError } = useGetProductByIdQuery(id);
  console.log("product data is :", p);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left: Images */}
      <div className="lg:col-span-5">
        <div className="grid aspect-square place-items-center rounded-3xl border border-slate-200 bg-slate-100">
          <img src={p?.images[0]} alt="" />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl border border-slate-200 bg-slate-50"
            />
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="lg:col-span-7">
        <div className="flex items-center gap-2">
          <span
            variant="outline"
            className="rounded-full border-emerald-100 bg-emerald-50 text-emerald-700"
          >
            {p.tag || "Fresh"}
          </span>

          <span className="text-xs text-slate-500">
            ⭐ {p.ratingCount.toFixed(1)} • By {p.vendor}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{p.name}</h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          This is a product details UI that looks production-ready. Later you’ll
          connect real data, reviews, and Stripe checkout.
        </p>

        <div className="mt-5 flex items-end gap-3">
          <div className="text-3xl font-semibold text-emerald-700">
            ${p.price.toFixed(2)}
          </div>

          {p.oldPrice ? (
            <div className="text-sm text-slate-400 line-through">
              ${p.oldPrice.toFixed(2)}
            </div>
          ) : null}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm font-semibold">Delivery</div>
            <p className="mt-1 text-sm text-slate-600">
              Arrives in 20–40 minutes (UI)
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm font-semibold">Return</div>
            <p className="mt-1 text-sm text-slate-600">
              Easy returns within 7 days (UI)
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 flex-1 rounded-2xl bg-emerald-600 hover:bg-emerald-700">
            Add to Cart
          </Button>

          <Button variant="outline" className="h-12 flex-1 rounded-2xl">
            ♡ Add to Wishlist
          </Button>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 p-6">
          <div className="text-sm font-semibold">Product info</div>

          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Category</span>
              <span>{p.category}</span>
            </div>

            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Stock</span>
              <span>In stock</span>
            </div>

            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>SKU</span>
              <span>NM-{p.slug.slice(0, 6).toUpperCase()}</span>
            </div>

            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Shipping</span>
              <span>Free over $50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
