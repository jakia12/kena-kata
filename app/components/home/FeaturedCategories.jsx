import { categories } from "@/data/categories";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { CategoryCard } from "../shop/CategoryCard";

export function FeaturedCategories() {
  return (
    <Container className="mt-10">
      <SectionHeader title="Featured Categories" />
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.slice(0, 6).map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </Container>
  );
}
