const path = require("path")

const createPagePath = memberName =>
  `/member/${memberName
    .split(" ")
    .join("-")
    .toLowerCase()}`

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const memberTemplate = path.resolve(`src/templates/member.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    console.log("result: ", JSON.stringify(result))
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: memberTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
