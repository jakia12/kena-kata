"use client";

import { useGetProductsQuery } from "@/apiSlice";

import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { ProductCard } from "../shop/ProductCard";

export function PopularProducts() {
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
      <SectionHeader title="Popular Products" rightHref="/search" />
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 10).map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Container>
  );
}
