import styled, { css } from 'styled-components'

export const MenuBar = styled.div<{ isIntersecting: boolean }>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.5rem;
  background-color: ${({ theme, isIntersecting }) =>
    isIntersecting && theme.primaryPurple};
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  z-index: 200;
`

export const LogoSvg = styled.svg<{ isIntersecting: boolean }>`
  position: fixed;
  top: 2rem;
  left: 2rem;
  height: 6.5rem;
  transition: height 0.1s ease-in-out;

  ${({ isIntersecting }) =>
    isIntersecting &&
    css`
      margin-left: 1rem;
      height: 4rem;
      top: 0.3rem;
      left: 0.5rem;
    `};
`

export const LogoGroup = styled.g`
  fill: none;
  stroke: ${({ theme }) => theme.primaryLight};
  stroke-width: 14px;
`

export const HashEye = styled.text`
  font-family: 'Arial';
  fill: ${({ theme }) => theme.primaryLight};
`

export const StyledMenu = styled.div<{ isIntersecting: boolean }>`
  align-self: center;
  opacity: ${({ isIntersecting }) => (isIntersecting ? '1' : '0')};
  margin-right: 1rem;
`

export const StyledLink = styled.a`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0 1rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  transition: color 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.primaryPink};
  }
`
