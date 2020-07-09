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
    title: `Living Life`,
    author: `Paul Applegate`,
    description: `Living life and writing some things down along the way`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/papplegate`,
      },
      {
        name: `github`,
        url: `https://github.com/theapplegates`,
      },
    ],
  },
}
