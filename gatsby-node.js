const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___memberSince] }
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

    const membersData = result.data.allMarkdownRemark.edges

    const createPath = name => {
      if (name) {
        return `/${name
          .split(' ')
          .join('-')
          .toLowerCase()}`
      }
    }

    const getPreviousName = index => {
      if (index !== 0) return membersData[index - 1].node.frontmatter.name
    }

    const getNextName = index => {
      if (index < membersData.length - 1)
        return membersData[index + 1].node.frontmatter.name
    }

    membersData.forEach(({ node }, i) => {
      createPage({
        path: createPath(node.frontmatter.name),
        // needs to be View.tsx to compile and run graphql query in the client
        component: path.resolve(`src/templates/member/View.tsx`),
        context: {
          name: node.frontmatter.name,
          currentPath: createPath(node.frontmatter.name),
          previousPath: createPath(getPreviousName(i)),
          nextPath: createPath(getNextName(i)),
        }, // additional data can be passed via context
      })
    })
  })
}
