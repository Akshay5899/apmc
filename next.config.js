/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",                // for static export
  trailingSlash: true,             // ensures proper paths
  basePath: isProd ? "/apmc" : ""  // GitHub Pages repo name
};

module.exports = nextConfig;
