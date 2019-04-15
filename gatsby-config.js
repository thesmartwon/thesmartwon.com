module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Smart Blog",
        start_url: "/",
        icon: "static/favicon.ico",
        icons: [
          {
            src: `/favicons/64x64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `/favicons/192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        display: 'minimal-ui',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
      },
    },
  ]
}