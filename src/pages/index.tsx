import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/View'
import SEO from '../components/seo'

import { Section } from '../styles'
import Intro from '../components/intro'
import Community from '../components/community'
import Members from '../components/members'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Community id="community" />
    <Members id="members" />
    <Section id="gallery">Gallery</Section>
  </Layout>
)

export default IndexPage
