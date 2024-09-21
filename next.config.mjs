import { config } from 'dotenv';

config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-virtualpet.s3.ap-northeast-1.amazonaws.com',
        port: '', // ポートは不要
        pathname: '/**', // 全てのパスを許可
      },
    ],
  },
};

export default nextConfig;