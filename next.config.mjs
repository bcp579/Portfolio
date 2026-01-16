/** @type {import('next').NextConfig} */
const nextConfig = {
  //  Enables static export
  output: 'export',

  //  Sets the base path to your repository name
  // basePath: '/Portfolio',

  //  Disables image optimization, which is not supported in a static export environment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;