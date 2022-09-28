/** @type {import('next').NextConfig} */
const nextConfig = {
  forceSwcTransforms: true,
  reactStrictMode: true,
  swcMinify: false, // it should be false by default 
  images : {
  domains: [
    'lh3.googleusercontent.com',
    'cdn.pixabay.com',
    'p16-amd-va.tiktokcdn.com',
    'image.shutterstock.com'
  ],
},
}

module.exports = nextConfig;
