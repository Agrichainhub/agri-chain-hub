import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import SellPage from "./SellPage";
import { currentUser } from "@/lib/auth";

const page = async () => {
  const user = await currentUser();

  if (user.role !== "FARMER") {
    return redirect("/dashboard");
  }

  const products = await db.product.findMany({ where: { farmerId: user.id } });

  return <SellPage products={products} />;
};

export default page;
