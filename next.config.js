/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "makerbros.co"
    ],
  },
}

module.exports = nextConfig
