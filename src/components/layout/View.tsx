import React, { ReactNode, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

import Burger from '../burger'
import Menu from '../menu'
// import Header from "../header"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 2rem;
  border: solid 1px red;
`

const Footer = styled.footer`
  height: 50px;
  background-color: pink;
`

type Props = {
  children: ReactNode
}

const View = ({ children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Container>
            <main>{children}</main>
            <Footer>FemCoLab 2019</Footer>
          </Container>
        </ThemeProvider>
      )}
    />
  )
}

export default View
