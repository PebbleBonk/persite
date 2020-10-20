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

    const articleTemplate = Path.resolve('./src/templates/article.js')

    const res = await graphql(`
    query {
        allMarkdownRemark (
            sort: { order: DESC, fields: [frontmatter___date] }
        ){
            edges {
                node {
                    frontmatter {
                        title,
                        links
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    let prev, curr, next;
    const l = res.data.allMarkdownRemark.edges.length;
    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    for(i = 0; i < l; i++) {
        curr = (next == null) ? getNavContext(res.data.allMarkdownRemark.edges[i]) : next;
        next = (i+1<l) ? getNavContext(res.data.allMarkdownRemark.edges[i+1]) : null;

        createPage({
            component: articleTemplate,
            path: curr.path,
            context: {
                slug: curr.slug,
                navContext: {next: next, prev: prev},
                links: curr.links
            }
        }
        )

        prev = curr;
    };
}

const getNavContext = (edge) => {
    if (edge == null) {
        return null;
    }
    return {
        path: `/projects/${edge.node.fields.slug}`,
        title: edge.node.frontmatter.title,
        slug: edge.node.fields.slug,
        links: edge.node.frontmatter.links
    }
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