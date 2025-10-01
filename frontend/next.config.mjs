/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is a good practice for security, but might require configuration
  // based on your deployment environment.
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_URL || 'http://localhost:3001'}/:path*`,
      },
    ];
  },
};

export default nextConfig;
