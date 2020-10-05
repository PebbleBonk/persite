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
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    'gatsby-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'featured',
        path: path.join(__dirname, 'articles', 'featured')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: path.join(__dirname, 'articles', 'normal')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'img')
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-static-images',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              // Customize the prompt used in shell output
              // Leave empty to hide prompts
              prompt: {
                user: "root",
                host: "localhost",
              },
            },
          }
        ]
      }
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'uuddlrlrbas' // delete or `undefined` to disable password protection
      }
    },
  ],
}
