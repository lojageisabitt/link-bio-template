/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
