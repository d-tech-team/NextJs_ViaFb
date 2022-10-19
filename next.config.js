/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    api_base_url: 'http://localhost:3000'
  }
}

module.exports = nextConfig
