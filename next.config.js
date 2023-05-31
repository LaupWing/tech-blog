/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      serverActions: true
   },
   compiler: {
      styledComponents: true,
   },
   images: {
      domains: [
         "res.cloudinary.com"
      ]
   }
}

module.exports = nextConfig
