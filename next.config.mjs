/** @type {import('next').NextConfig} */
const nextConfig = {

//     async redirects() {
//     return [
//       {
//         source: '/studio/:path*',
//         destination: '/', // redirect Studio to homepage on GH Pages
//         permanent: false,
//       },
//     ];
//   },
    typescript: {
        ignoreBuildErrors: true, // 🚨 Ignores all TS errors during build
    },
    // output: "export",  // <=== enables static exports
    // reactStrictMode: true,
};

export default nextConfig;
