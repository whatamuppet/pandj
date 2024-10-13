/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/pandj' : '',
};

export default nextConfig;

export const { basePath } = nextConfig;
