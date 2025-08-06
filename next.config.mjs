/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Disable Sharp for static export compatibility
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  // External packages configuration for deployment
  serverExternalPackages: ["sharp"],
  // Webpack configuration to handle Sharp module loading
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Resolve Sharp module loading issues on client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        sharp: false,
      };
    }
    return config;
  },
};

export default nextConfig;
