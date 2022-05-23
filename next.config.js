/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: ['static.tumblr.com', "img001.prntscr.com"], 
    formats: ['image/avif', 'image/webp'] 
  }
}

module.exports = nextConfig
