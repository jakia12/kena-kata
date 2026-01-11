import { Container } from "@/components/shared/Container";
import ProductSinglePage from "./components/ProductSinglePage";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  return (
    <Container className="py-10">
      <ProductSinglePage id={id} />
    </Container>
  );
}
