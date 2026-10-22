/**
 * Static export for Firebase Hosting.
 * The site is pure content (no server runtime needed), so `output: "export"`
 * emits a fully static `out/` directory that Firebase serves directly.
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Firebase Hosting has no Next image optimizer; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
