/** @type {import('next').NextConfig} */
const repo = "Kongwell";
const useRepoBasePath = process.env.DEPLOY_TARGET === "gh";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: useRepoBasePath ? `/${repo}` : "",
  assetPrefix: useRepoBasePath ? `/${repo}/` : "",
};

export default nextConfig;
