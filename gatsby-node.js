const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const memberTemplate = path.resolve(`src/templates/member.js`)

  const createPagePath = name =>
    `/member/${name
      .split(" ")
      .join("-")
      .toLowerCase()}`

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              name
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
        path: createPagePath(node.frontmatter.name),
        component: memberTemplate,
        context: {
          name: node.frontmatter.name,
        }, // additional data can be passed via context
      })
    })
  })
}
