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
  },
  images: {
    remotePatterns: [
      {
        hostname: 'img.vietqr.io',
        pathname: '/images/:path*',
        protocol: 'https'
      }
    ]
  }

}

module.exports = nextConfig
