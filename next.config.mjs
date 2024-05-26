/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
            {
                source: '/project/:path',
                destination: '/en/project/:path',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
