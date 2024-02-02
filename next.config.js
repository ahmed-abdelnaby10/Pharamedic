/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '/img/**.*'
            }
        ]
    }
}

module.exports = nextConfig
