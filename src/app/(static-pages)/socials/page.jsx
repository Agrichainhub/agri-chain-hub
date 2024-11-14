import React from "react";
import {
  LucideFacebook,
  LucideTwitter,
  LucideInstagram,
  LucideLinkedin,
  LucideYoutube,
} from "lucide-react";

const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-green-700">
          Connect with Us on Social Media
        </h1>
        <p className="mt-2 text-gray-600">
          Follow us for updates, farming tips, and community stories.
        </p>
      </header>

      {/* Social Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
        <a
          href="https://facebook.com/agrichainhub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-50 transition"
        >
          <LucideFacebook className="text-blue-600 w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">Facebook</span>
        </a>

        <a
          href="https://twitter.com/agrichainhub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-50 transition"
        >
          <LucideTwitter className="text-blue-400 w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">Twitter</span>
        </a>

        <a
          href="https://instagram.com/agrichainhub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-50 transition"
        >
          <LucideInstagram className="text-pink-600 w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">Instagram</span>
        </a>

        <a
          href="https://linkedin.com/company/agrichainhub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-50 transition"
        >
          <LucideLinkedin className="text-blue-700 w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">LinkedIn</span>
        </a>

        <a
          href="https://youtube.com/agrichainhub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-green-50 transition"
        >
          <LucideYoutube className="text-red-600 w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">YouTube</span>
        </a>
      </section>
    </div>
  );
};

export default Socials;
