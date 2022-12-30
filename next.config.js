/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['miro.medium.com'],
        remotePatterns: [{ protocol: "https:", hostname: "**.medium.com", }, ],
    },
}