exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/components/templates/page`);

  return graphql(`
    query pageQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          html
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: node.frontmatter.slug,
        component: pageTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
