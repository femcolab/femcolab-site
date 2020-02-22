import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: slateblue;
  height: 100px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  /* visibility: none; */
`

type Props = {
  siteTitle?: string
}

const Header = ({ siteTitle }: Props) => <Container />

export default Header
