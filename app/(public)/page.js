import { DailyBestSells } from "@/components/home/DailyBestSells";
import { DealsOfTheDay } from "@/components/home/DealsOfTheDay";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { Hero } from "@/components/home/Hero";
import { PopularProducts } from "@/components/home/PopularProducts";
import { ProductRows } from "@/components/home/ProductRows";
import { PromoBanners } from "@/components/home/PromoBanners";

export default function HomePage() {
  return (
    <div className="pb-16">
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <ProductRows />
    </div>
  );
}
