module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Smart Blog",
        start_url: "/",
        icon: "static/favicon.ico",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
      },
    },
  ]
}