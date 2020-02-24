import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 20% 5% auto 25% [logo-end] 20%;
  grid-template-rows: 1.5fr 1fr 1fr 0.5fr;
  height: 100vh;
  background: ${({ theme }) => theme.primaryDark};
`
export const LogoContainer = styled.div`
  grid-column: 2;
  grid-column-end: logo-end;
  grid-row: 2;
`

export const TextLogo = styled.img`
  width: 100%;
`

export const DescriptionContainer = styled.div`
  grid-column: 4;
  grid-row: 3;
  text-align: right;
  padding: 30px 0;
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryLight};
  line-height: 2rem;
`

export const AboutUs = styled.h2`
  grid-column: 2;
  grid-row: 3;
  text-transform: lowercase;
  font-size: 1.5rem;
  writing-mode: vertical-lr;
  color: ${({ theme }) => theme.primaryLight};
  margin: 0;
  align-self: end;
`

export const Line = styled.span`
  grid-column: 2;
  grid-row: 4;
  border-left: solid 4px ${({ theme }) => theme.primaryPink};
  margin: 20px 0 0 10px;
`
