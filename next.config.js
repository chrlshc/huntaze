/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pour Cloudflare Pages
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig