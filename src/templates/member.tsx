import React from 'react'
import { graphql } from 'gatsby'

type Props = {
  data: any
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: Props) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.name}</h1>
        <p>Member since {frontmatter.memberSince}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(frontmatter: { name: { eq: $name } }) {
      html
      frontmatter {
        name
        memberSince(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
