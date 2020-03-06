import React from 'react'

import Layout from '../components/layout/View'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Community from '../components/community'
import Members from '../components/members'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Community />
    <Members />
    <Gallery />
  </Layout>
)

export default IndexPage
