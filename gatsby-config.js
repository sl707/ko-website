module.exports = {
  siteMetadata: {
    title: '고씨중앙종문회',
    description: '고씨중앙종문회 공식 웹사이트',
    author: '@sl707',
    siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/'
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '고씨중앙종문회',
        short_name: '고씨',
        start_url: '/',
        background_color: '#f8f6f3',
        theme_color: '#0f1b2d',
        display: 'minimal-ui',
        icon: 'src/images/고씨마크.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
