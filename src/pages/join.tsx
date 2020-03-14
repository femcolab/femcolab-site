import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/View'
import SEO from '../components/seo'

const JoinPage = ({ isIntersecting }: { isIntersecting: boolean }) => (
  <Layout isIntersecting={isIntersecting}>
    <SEO title="Join" />
    <div>
      <h1>Join</h1>
      <Link
        to="https://www.meetup.com/Female-Coders-Lab-Melbourne/"
        target="_blank"
      >
        Meetup
      </Link>
      <Link to="https://github.com/femcolab/femcolab-site" target="_blank">
        Github
      </Link>
    </div>
  </Layout>
)

export default JoinPage
