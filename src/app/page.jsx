import React from "react";
import Link from "next/link";
import { Bean, ShoppingCart, Tractor } from "lucide-react";

const Homepage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          <span className="text-green-700">Green</span>Hub
        </h1>
        <p className="text-lg">
          Connecting farmers and customers for a sustainable future
        </p>
      </header>
      <main className="flex flex-wrap justify-center">
        <section className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Bean className="text-green-500 mx-auto w-10 h-10" />
            <h2 className="text-xl text-center font-bold">Fresh Produce</h2>
            <p>Get the freshest produce directly from our farmers</p>
            <Link href="#" className="btn btn-primary mt-2 w-full text-center">
              Explore
            </Link>
          </div>
        </section>
        <section className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Tractor className="text-green-500 mx-auto w-10 h-10" />
            <h2 className="text-xl text-center font-bold">Farmers' Market</h2>
            <p>Buy directly from our farmers and support local agriculture</p>
            <Link href="#" className="btn btn-primary mt-2 w-full text-center">
              Explore
            </Link>
          </div>
        </section>
        <section className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <ShoppingCart className="text-green-500 mx-auto w-10 h-10" />
            <h2 className="text-xl text-center font-bold">Order Now</h2>
            <p>Get your favorite produce delivered to your doorstep</p>
            <Link href="#" className="btn btn-primary mt-2 w-full text-center">
              Order Now
            </Link>
          </div>
        </section>
      </main>
      <footer className="text-center mt-8">
        <p>&copy; 2024 GreenHub</p>
      </footer>
    </div>
  );
};

export default Homepage;
