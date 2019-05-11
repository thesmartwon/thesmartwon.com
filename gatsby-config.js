module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              wrapperStyle: () => '',
              backgroundColor: '#f7f0eb',
              quality: 90,
            }
          },
        ]
      }
    },
    { // Make a web manifest for nice mobile page background
      // Also handles favicon
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "The Smart Blog",
        start_url: "/",
        icon: "src/pages/favicon.jpg",
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        display: "minimal-ui",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
      },
    },
    "gatsby-plugin-sass",
    // Add stuff to <head>
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true,
        disable: process.env.CI || process.env.NODE_ENV !== "production"
      },
    }
  ]
}