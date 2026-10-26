import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	// Tailwind v4 runs through PostCSS (postcss.config.mjs), not a Turbopack
	// loader — the loader rule only processed the CSS without generating
	// utilities, which is why the UI rendered unstyled.
};

export default nextConfig;
