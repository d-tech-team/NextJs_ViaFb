/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    api_base_url: 'https://api.kinue.moe'
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.kinue.moe/:path*"
      }
    ]
  }

}

module.exports = nextConfig
