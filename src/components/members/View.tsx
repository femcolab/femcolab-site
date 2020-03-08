import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MemberLinks, MemberProps } from './types'
import { createSlug } from '../../utils/page'

import {
  Container,
  Emojis,
  WeMeetForBox,
  WeMeetForTitleContainer,
  MembersListContainer,
  WeMeetForList,
  StyledLink,
  JoinLink,
} from './styles'

const View = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___memberSince] }
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
    `
  )

  const { edges: members } = data.allMarkdownRemark

  const renderMemberLinks: MemberLinks = () =>
    members.map(({ node }: MemberProps) => {
      const url = `/${createSlug(node.frontmatter.name)}`
      return (
        <StyledLink to={url} key={url}>
          {node.frontmatter.name}
        </StyledLink>
      )
    })

  return (
    <Container id="members">
      <Emojis>👩🏽👩🏻👩🏻‍💻</Emojis>
      <WeMeetForTitleContainer>
        <h2>We meet for</h2>
      </WeMeetForTitleContainer>
      <WeMeetForBox>
        <WeMeetForList>
          <p>Study Groups</p>
          <p>Challenges</p>
          <p>Workshops</p>
        </WeMeetForList>
      </WeMeetForBox>
      <MembersListContainer>
        <h2>Members</h2>
        {renderMemberLinks()}
        <JoinLink to={'/join'}>Join</JoinLink>
      </MembersListContainer>
    </Container>
  )
}

export default View
