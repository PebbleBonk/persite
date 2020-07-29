/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "||",
    author: "Olli Riikonen"
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: path.join(__dirname, 'src')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'resources', 'img')
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images'
          ,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
