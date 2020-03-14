import React from 'react'
import logoText from '../../images/fcl-logo-text.svg'

import {
  Container,
  LogoContainer,
  TextLogo,
  DescriptionContainer,
  Description,
  AboutUs,
  Line,
} from './styles'

const View = ({ isIntersecting }: { isIntersecting: boolean }) => (
  <Container isIntersecting={isIntersecting}>
    <LogoContainer>
      <TextLogo src={logoText} />
    </LogoContainer>
    <DescriptionContainer>
      <Description>
        A monthly meetup for women learning web development
      </Description>
    </DescriptionContainer>
    <AboutUs>About us</AboutUs>
    <Line />
  </Container>
)

export default View
