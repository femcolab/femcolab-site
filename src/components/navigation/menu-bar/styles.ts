import styled, { css } from 'styled-components'

export const MenuBar = styled.div<{ isIntersecting: boolean }>`
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
