import React from 'react'
import logoText from '../../images/fcl-logo-text.svg'

import { Wrapper, TextLogo, Description } from './styles'

const View = () => (
  <Wrapper>
    <TextLogo src={logoText} />
    <Description>
      <p>A monthly meetup for women learning web development</p>
    </Description>
  </Wrapper>
)

export default View
