/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_CLIENT_ID: "671893583610-52ktlv5jon2ns057vl0338fc7mif62kl.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
      experimental: {
        serverActions: true
      }
}

module.exports = nextConfig
