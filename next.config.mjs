/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "/gcbqsnz4g16h4x8z/chatz/_public/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// https://utfs.io/f/aWK3poDhq6ILaPfUXrDhq6ILyQKM0isnXbg1Cm2uTPoFlSpv
