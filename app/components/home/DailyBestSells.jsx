"use client";

import { useGetProductsQuery } from "@/apiSlice";

import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { ProductCard } from "../shop/ProductCard";

export function DailyBestSells() {
  const { data, isLoading, isError } = useGetProductsQuery({
    page: 1,
    limit: 10,
  });

  const products = data?.items || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  if (products?.length === 0) return <p>No Products Found</p>;

  return (
    <Container className="mt-10">
      <SectionHeader
        title="Daily Best Sells"
        subtitle="Featured deals picked for today"
      />
      <div className="mt-5 grid gap-4 lg:grid-cols-5">
        <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6 lg:col-span-1">
          <div className="text-sm font-semibold text-slate-800">
            Bring nature into your home
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Simple grocery UI with premium feel.
          </p>
          <div className="mt-6 text-6xl">🌿</div>
        </div>

        {products.slice(2, 6).map((p) => (
          <ProductCard key={p.slug} product={p} variant="wide" />
        ))}
      </div>
    </Container>
  );
}
