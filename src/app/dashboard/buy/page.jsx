import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

const Buy = async () => {
  const products = await db.product.findMany({ where: { availability: true } });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-sidebar p-4 rounded-lg shadow-sm hover:shadow-md"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.images[0] || "/placeholder.png"}
                alt={product.name}
                width={200}
                height={150}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold mb-1 truncate">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-2 line-clamp-1">
                {product.description}
              </p>
              <p className="text-blue-500 font-semibold mb-4">
                ${product.price}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition">
                Buy
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
