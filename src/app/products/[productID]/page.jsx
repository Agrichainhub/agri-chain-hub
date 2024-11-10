import { db } from "@/lib/db";
import ProductPage from "./ProductPage";

const page = async ({ params }) => {
  const productID = (await params).productID;
  const product = await db.product.findUnique({ where: { id: productID } });
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductPage product={product} />;
};

export default page;
