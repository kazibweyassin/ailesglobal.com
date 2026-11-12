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
      {
        source: "/llm.txt",
        destination: "/llms.txt",
        permanent: true,
      },
      {
        source: "/scholarships",
        destination: "https://ailes-global-rebuild.vercel.app/",
        permanent: false,
      },
      {
        source: "/study-abroad",
        destination: "https://ailes-global-rebuild.vercel.app/",
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Link", value: '<https://ailesglobal.com/llms.txt>; rel="describedby"' }],
      },
      {
        source: "/",
        headers: [{ key: "Link", value: '<https://ailesglobal.com/llms.txt>; rel="describedby"' }],
      },
    ]
  },
}

export default nextConfig
