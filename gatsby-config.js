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
              backgroundColor: "#F5F5F5",
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
            src: "/favicon.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
        display: "minimal-ui",
        background_color: "#F5F5F5",
        theme_color: "#00D1B2",
        cache_busting_mode: "none", // change this if changing favicon
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet", // Add stuff to <head>
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true,
        disable: process.env.CI || process.env.NODE_ENV !== "production",
      },
    }
  ]
}