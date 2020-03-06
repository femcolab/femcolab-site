import React from 'react'

import { Container, Heading, ImageWrapper } from './styles'

const View = () => (
  <section id="gallery">
    <Heading>Gallery</Heading>
    <Container>
      <ImageWrapper />
      <ImageWrapper />
      <ImageWrapper />
      <ImageWrapper />
    </Container>
  </section>
)

export default View
