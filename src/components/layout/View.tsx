import React, { ReactNode, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

import Burger from '../burger'
import Menu from '../menu'
import logoSvg from '../../images/fcl-logo.svg'
import { StyledLogo, Container, Footer } from './styles/layout'

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
          <a href="/">
            <StyledLogo src={logoSvg} />
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
