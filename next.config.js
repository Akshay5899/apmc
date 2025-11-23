/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/apmc',        // <--- add this
  assetPrefix: '/apmc',     // <--- add this
};

module.exports = nextConfig;
