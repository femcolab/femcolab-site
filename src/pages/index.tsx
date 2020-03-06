import React from 'react'

import Layout from '../components/layout/View'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Community from '../components/community'
import Members from '../components/members'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Community id="community" />
    <Members id="members" />
    <Gallery id="gallery" />
  </Layout>
)

export default IndexPage
