/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:9999/api",
  },
  images: {
    domains: ["demos.wp-guppy.com", "storage.googleapis.com"],
  },
};

export default nextConfig;
