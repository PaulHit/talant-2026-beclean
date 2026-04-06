/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'talantulinnegot.com',
      },
    ],
  },
};

export default nextConfig;
