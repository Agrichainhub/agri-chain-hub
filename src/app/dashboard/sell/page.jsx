import { db } from "@/lib/db";
import SellPage from "./SellPage";
import { currentUser } from "@/lib/auth";

const page = async () => {
  const user = await currentUser();

  const products = await db.product.findMany({ where: { farmerId: user.id } });
  console.log(products);

  return <SellPage products={products} />;
};

export default page;
