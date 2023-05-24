/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: {
      styledComponents: true,
   },
   images: {
      domains: [
         "res.cloudinary.com",
         "cms-cdn.placeholder.co"
      ]
   }
}

module.exports = nextConfig
