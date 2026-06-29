import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained build (.next/standalone) so the Docker image can run
  // with only the traced runtime files — no full node_modules needed.
  output: "standalone",
};

export default nextConfig;
