/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Enables dynamic routing and SSR support on Vercel

    experimental: {
        serverActions: true, // if you're using Next.js 13/14/15 App Router features
    },
};

export default nextConfig;
