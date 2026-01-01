"use client";

import { ProductCard } from "@/components/shop/ProductCard";
import { useGetProductsQuery } from "@/store/api/apiSlice";
import { useState } from "react";

const ProductPage = () => {
  const [page, setPage] = useState(1);

  //   fetch products from redux
  const limit = 12;

  const { data, isLoading, isError } = useGetProductsQuery({
    page,
    limit,
  });

  const products = data?.items || [];
  console.log("product data");

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  if (products?.length === 0) return <p>No products found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </div>

      {/* pagination for products */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded border disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded border"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
