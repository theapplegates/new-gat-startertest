module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
      preset: `theme-ui-sketchy-preset`,
      prismPreset: `oceanic-next`,
      webfontURL:
         "https://fonts.googleapis.com/css?family=Architects+Daughter",
},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
