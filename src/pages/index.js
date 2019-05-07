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
    <Section>Community</Section>
    <Section>Members</Section>
    <Section>We Meet For</Section>
    <Section>Gallery</Section>
  </Layout>
)

export default IndexPage
