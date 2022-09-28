/** @type {import('next').NextConfig} */
const nextConfig = {
  forceSwcTransforms: true,
  reactStrictMode: true,
  swcMinify: false // it should be false by default 
}

module.exports = nextConfig
