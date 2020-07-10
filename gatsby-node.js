const Path = require('path')


exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if (node.internal.type === 'MarkdownRemark') {
        const slug = Path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })
    } 
  }


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const projectTemplate = Path.resolve('./src/templates/project.js')

    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }`)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        }
        )
    });
}


// Fixes the constant react-dom error message on console.
// Solution found in: https://stackoverflow.com/questions/56093598
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
  }