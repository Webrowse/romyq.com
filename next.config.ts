import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: false,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default withMDX(nextConfig);
