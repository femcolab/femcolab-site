import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Section = styled.section`
  height: 400px;
  border: solid 1px blue;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section>Cover</Section>
    <Section id="community">Community</Section>
    <Section id="members">Members</Section>
    <Section id="wemeetfor">We Meet For</Section>
    <Section id="gallery">Gallery</Section>
  </Layout>
)

export default IndexPage
