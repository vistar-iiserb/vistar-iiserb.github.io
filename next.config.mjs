/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_SANITY_PROJECT_ID: "gn9cx58k",
        NEXT_PUBLIC_SANITY_DATASET: "production",
    },
    typescript: {
        ignoreBuildErrors: true, // 🚨 Ignores all TS errors during build
    },
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
