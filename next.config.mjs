/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/assessment/risk",
        destination: "/assessment",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
