/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for catching errors
    swcMinify: true, // Use SWC for faster builds
    images: {
      domains: ['example.com'], // Allow image optimization from specific domains
    },
    env: {
      API_URL: process.env.API_URL, // Expose env variables to frontend
    },
    webpack: (config) => {
      // Example for handling CSS modules and loaders
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  