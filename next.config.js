/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ytimg.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'i.postimg.cc',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '**',
        },
      ],
    },
}

module.exports = nextConfig
