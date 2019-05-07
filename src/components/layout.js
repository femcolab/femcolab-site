/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  border: solid 1px red;
`

const Footer = styled.footer`
  height: 50px;
  background-color: pink;
`
const Menu = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: tomato;
  z-index: 20;
`

const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 100px;
`

const ListItem = styled.li`
  a {
    text-decoration: none;
  }
`
const Layout = ({ children }) => (
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu>
          <List>
            <ListItem>
              <a href="#community">Community</a>
            </ListItem>
            <ListItem>
              <a href="#members">Members</a>
            </ListItem>
            <ListItem>
              <a href="/">Join Us</a>
            </ListItem>
            <ListItem>
              <a href="#wemeetfor">We Meet For</a>
            </ListItem>
            <ListItem>
              <a href="#gallery">Gallery</a>
            </ListItem>
          </List>
        </Menu>
        <Container>
          <main>{children}</main>
          <Footer>FemCoLab 2019</Footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
