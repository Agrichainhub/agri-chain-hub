"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductPage = ({ product }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4 mt-5">
      <Button onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2" />
        Back to products
      </Button>
      <div className="bg-sidebar rounded-lg shadow-lg overflow-hidden p-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="p-6 md:w-1/2 flex flex-col">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.description}</p>

            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-green-600 mr-2">
                ${product.price}
              </span>
              <span className="text-gray-500">per {product.unit}</span>
            </div>

            <div className="flex items-center mb-4">
              <span
                className={`mr-2 px-3 py-1 rounded-full text-sm ${
                  product.availability
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.availability ? "Available" : "Out of Stock"}
              </span>
              <span className="text-gray-500">
                {product.quantity} {product.unit}s available
              </span>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{product.category}
              </span>
            </div>

            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
