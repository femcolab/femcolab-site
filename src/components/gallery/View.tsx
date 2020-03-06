import React from 'react'

import { Container, Heading, ImageWrapper } from './styles'

const View = ({ id }: { id: string }) => (
  <Heading>
    <Heading>Gallery</Heading>
    <Container>
      <ImageWrapper />
      <ImageWrapper />
      <ImageWrapper />
      <ImageWrapper />
    </Container>
  </Heading>
)

export default View
