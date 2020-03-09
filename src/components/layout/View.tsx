import React, { ReactNode, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { Container, Footer } from './styles/layout'
import Burger from '../navigation/burger'
import Menu from '../navigation/menu'
import Logo from '../logo'

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
      render={() => (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <a href="/">
            <Logo />
          </a>
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
