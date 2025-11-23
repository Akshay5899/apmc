/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/apmc" : "",
  assetPrefix: isProd ? "/apmc/" : ""
};

module.exports = nextConfig;
