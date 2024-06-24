/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'fakestoreapi.com',
                port:'',
                pathname:'/img/**'
            }
        ]
    },
    logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
