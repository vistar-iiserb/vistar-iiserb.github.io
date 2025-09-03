/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Configure for GitHub Pages
    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
