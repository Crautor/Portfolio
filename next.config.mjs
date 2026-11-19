/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  reactStrictMode: true,
  images: {
    // The image optimizer needs a server; with a static export images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
