import React from 'react'
import { Link, graphql } from 'gatsby'
import { MemberProps } from './types'
import { Container, Heading, Description } from './styles'

export default function Template({ data, pageContext }: MemberProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { previousPath, nextPath } = pageContext

  return (
    <Container>
      <Heading>{frontmatter.name}</Heading>
      <p>Member since {frontmatter.memberSince}</p>
      <Description dangerouslySetInnerHTML={{ __html: html }} />
      {previousPath && <Link to={previousPath}>Previous</Link>}
      {nextPath && <Link to={nextPath}>Next</Link>}
    </Container>
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
