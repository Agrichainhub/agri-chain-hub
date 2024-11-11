import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-600">
          Connecting farmers and customers, fostering a sustainable future for
          agriculture.
        </p>
      </header>

      {/* Our Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Our mission is to create a seamless marketplace where farmers and
          customers can interact, buy, and sell agricultural products. We aim to
          empower farmers with tools to grow their businesses and provide
          customers with high-quality, fresh, and locally sourced products.
        </p>
      </section>

      {/* How We Work Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg bg-white rounded-lg">
            <h3 className="text-2xl font-medium text-green-700 mb-2">
              Connect Farmers
            </h3>
            <p className="text-gray-700">
              We bring farmers together with customers, offering a platform
              where they can showcase their products and access wider markets.
            </p>
          </Card>
          <Card className="p-6 shadow-lg bg-white rounded-lg">
            <h3 className="text-2xl font-medium text-green-700 mb-2">
              Support Sustainability
            </h3>
            <p className="text-gray-700">
              Our platform is committed to supporting sustainable farming
              practices by connecting local producers with conscious consumers.
            </p>
          </Card>
          <Card className="p-6 shadow-lg bg-white rounded-lg">
            <h3 className="text-2xl font-medium text-green-700 mb-2">
              Easy Transactions
            </h3>
            <p className="text-gray-700">
              With a user-friendly interface, we facilitate easy transactions
              that ensure transparency and efficiency for both farmers and
              customers.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          Our Impact
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We are proud to be part of the agricultural ecosystem, helping farmers
          increase their productivity and customers access fresh, quality food.
          Here are some of the ways we are making a difference:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Over 1,000 farmers have registered on our platform</li>
          <li>Empowered local communities with fair trade practices</li>
          <li>
            Helping reduce food waste by connecting surplus produce to buyers
          </li>
          <li>Creating jobs and improving the livelihoods of farmers</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-green-50 rounded-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Join Us Today!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Become a part of the sustainable agriculture movement. Whether you're
          a farmer or a customer, our platform is here to serve you.
        </p>
        <Link href="/auth/register">
          <Button
            variant="primary"
            size="lg"
            className="text-white bg-green-600 hover:bg-green-700"
          >
            Sign Up Now
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
