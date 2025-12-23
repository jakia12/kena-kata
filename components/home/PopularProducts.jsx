import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

export function PopularProducts() {
  return (
    <Container className="mt-10">
      <SectionHeader title="Popular Products" rightHref="/search" />
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {products.slice(0, 10).map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Container>
  );
}
