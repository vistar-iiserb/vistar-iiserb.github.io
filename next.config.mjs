/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "gn9cx58k",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        SANITY_API_READ_TOKEN:'ska2Uw8b0RXflMZYUvpfK6l6wC6QXkmZwxJArCixOcjmIvIrh4vUSGuXgJgj4WHk5N5j0g1VrxZLFt75gozWuezxYTs6nmOXgroQgIKQonkqBMwLJ3T6DYMrP8wkAknYhCp32yaBsbsGKHfp3nANfzDV6g8G8oPlvELkwyu7eeU9ePFX4rZ3'
    },

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
