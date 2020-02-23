import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/View'
import SEO from '../components/seo'

import { Section } from '../styles'
import Intro from '../components/intro'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Section id="community">Community</Section>
    <Section id="members">Members</Section>
    <Section id="wemeetfor">We Meet For</Section>
    <Section id="gallery">Gallery</Section>
  </Layout>
)

export default IndexPage
