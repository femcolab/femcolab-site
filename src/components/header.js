import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  background-color: slateblue;
  height: 100px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  /* visibility: none; */
`

const Header = ({ siteTitle }) => <Container />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
