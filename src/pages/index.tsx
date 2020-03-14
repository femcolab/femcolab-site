import React, { useState, useEffect } from 'react'

import Layout from '../components/layout/View'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Community from '../components/community'
import Members from '../components/members'
import Gallery from '../components/gallery'

const IndexPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  let target: HTMLElement | null
  const handleIntersect = (entries: any) => {
    entries.forEach((entry: any) => {
      entry.isIntersecting ? setIsIntersecting(true) : setIsIntersecting(false)
    })
  }

  useEffect(() => {
    const options = {
      rootMargin: '1000px 0px -80%',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleIntersect, options)

    target = document.getElementById('community')
    target && observer.observe(target)
  }, [])

  return (
    <Layout isIntersecting={isIntersecting}>
      <SEO title="Home" />
      <Intro isIntersecting={isIntersecting} />
      <Community />
      <Members />
      <Gallery />
    </Layout>
  )
}

export default IndexPage
