module.exports = {
  siteMetadata: {
    siteUrl: "https://planner-x.netlify.app/",
    title: "Planning X",
  },

  plugins: [      "gatsby-plugin-styled-components", 'gatsby-plugin-postcss',
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/pro-icon.png',
      },
    }

  ],
}
