/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'media.discordapp.net',
        },
        {
            protocol: "https",
            hostname: "render.crafty.gg",
        }
    ],
},
typescript: {
    ignoreBuildErrors: true
}
};

export default nextConfig;
