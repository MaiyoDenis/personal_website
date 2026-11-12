import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/personal_website" : "",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  trailingSlash: true,
};

export default nextConfig;
