/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
};

export default nextConfig;
