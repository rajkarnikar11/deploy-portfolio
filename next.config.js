const withPWA = require('next-pwa')
 
module.exports = withPWA({
    // async redirects() {
    //     return [
    //       {
    //         source: '/github.com/rajkarnikar11/Rashtrawaadi-Nepal',
    //         destination: 'github.com/rajkarnikar11/Rashtrawaadi-Nepal',
    //         permanent: true,
    //       },
    //       {
    //         source: '/github.com/rajkarnikar11/Minor-project',
    //         destination: 'github.com/rajkarnikar11/Minor-project',
    //         permanent: true,
    //       },
    //       {
    //         source: '/github.com/randazzle/NewMinorProjectDjango/',
    //         destination: 'github.com/randazzle/NewMinorProjectDjango/',
    //         permanent: true,
    //       },
    //       {
    //         source: '/bitbucket.org/rajkarnikar/yipl-frontend-challenge/src/master/',
    //         destination: 'bitbucket.org/rajkarnikar/yipl-frontend-challenge/src/master/',
    //         permanent: true,
    //       },
    //       {
    //         source: '/gitlab.com/kundalam-nepal/kundalam-client-poc/-/tree/salil',
    //         destination: 'gitlab.com/kundalam-nepal/kundalam-client-poc/-/tree/salil',
    //         permanent: true,
    //       },
          

    //     ]
    //   },
    pwa: {
        dest: 'public',
        register:true,
        skipWaiting:true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false
          }
      }

      return config;
  }
})
