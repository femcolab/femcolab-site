import styled from 'styled-components'

export const Container = styled.svg`
  width: 6rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
`

export const Logo = styled.g`
  fill: none;
  stroke: ${({ theme }) => theme.primaryLight};
  stroke-width: 14px;
`

export const HashEye = styled.text`
  font-family: 'Arial';
  fill: ${({ theme }) => theme.primaryLight};
`
