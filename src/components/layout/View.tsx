import React, { ReactNode, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { Container, Footer } from './styles/layout'
import Burger from '../navigation/burger'
import MenuTray from '../navigation/menu-tray'
import MenuBar from '../navigation/menu-bar'

type Props = {
  isIntersecting: boolean
  children: ReactNode
}

const View = ({ isIntersecting, children }: Props) => {
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
          <MenuTray open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
          <MenuBar isIntersecting={isIntersecting} />
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
