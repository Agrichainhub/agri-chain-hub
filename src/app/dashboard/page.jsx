import { currentUser } from "@/lib/auth";
import FarmerDashboard from "./FarmerDashboard";
import CustomerDashboard from "./CustomerDashboard";
import { db } from "@/lib/db";

export const metadata = {
  title: "Dashboard",
};

const DashboardHome = async () => {
  const user = await currentUser();
  const orders = await db.order.findMany({ where: { customerId: user.id } });
  const recommendedProducts = await db.product.findMany({
    where: { availability: true },
  });

  if (user.role === "FARMER") {
    return <FarmerDashboard />;
  }
  if (user.role === "CUSTOMER") {
    return (
      <CustomerDashboard
        orders={orders}
        recommendedProducts={recommendedProducts}
      />
    );
  }
  return <div>Hawk Tuah!</div>;
};

export default DashboardHome;
