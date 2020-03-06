import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 20% 30% auto 15% 20%;
  grid-template-rows: 0.5fr 1fr 1fr auto;
  height: 100vh;
  background: ${({ theme }) => theme.primaryLight};
`

export const Emojis = styled.div`
  grid-column: 2;
  grid-row: 1;
  margin-top: 20px;
  margin-right: 40px;
  line-height: 1.5;
  letter-spacing: 0.2rem;
`

export const WeMeetForBox = styled.div`
  grid-column: 4;
  grid-row: 2/3;
  padding: 0 20px 20px 20px;
  border: solid 1px black;
  font-size: 0.8rem;
`

export const WeMeetForTitleContainer = styled.div`
  grid-column: 5;
  grid-row: 2;
  z-index: 20;

  h2 {
    margin-top: 1rem;
    margin-left: -0.5rem;
    padding: 0.5rem 0;
    background: ${({ theme }) => theme.primaryLight};
    font-size: 0.8rem;
    text-transform: lowercase;
    writing-mode: vertical-lr;
  }
`

export const WeMeetForList = styled.div`
  grid-column: 5;
  grid-row: 2;

  p {
    margin: 1rem 0;
    font-size: 0.8rem;
  }
`

export const MembersListContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  margin-top: -100px;
  text-transform: uppercase;
`

export const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 1rem 0;

  :hover,
  :visited {
    color: initial;
  }
`
