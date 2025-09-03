import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:["10.218.193.103"],
   images: {
    // This is the more modern approach for Next.js 13 and later
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      // You can add other hosts here if you need to
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
    // For older versions of Next.js, you might see this syntax:
    // domains: ['i.postimg.cc'],
  },
};

export default nextConfig;
