import React from 'react'

import {
  MenuBar,
  LogoSvg,
  LogoGroup,
  HashEye,
  StyledMenu,
  StyledLink,
} from './styles'

type Props = {
  isIntersecting: boolean
}

const View = ({ isIntersecting }: Props) => {
  return (
    <MenuBar isIntersecting={isIntersecting}>
      <a href="/">
        <LogoSvg
          isIntersecting={isIntersecting}
          viewBox="0 0 595.28 704.73"
          xmlns="http://www.w3.org/2000/svg"
        >
          <LogoGroup>
            <path d="m229.94 500.69c-19.21 52-71.85 80.91-95.87 94.49s-117.63 46.41-97.62 30.41 41.61-81.21 49.63-128 1.92-110.48-2.93-139.26-11.28-81.33-11.15-106.99 11.61-84.09 34.38-116.75 34.34-47 74.27-56.48q39.92-9.4 117.47 7.56" />
            <path d="m291.52 515.18c-6.6-.2-33.21-.41-60.61-13.61s-35.6-20.06-53.27-36.1-32.87-37-45.15-65.08-15-54.85-15.83-74.86 8.6-53.59 18.21-66.42 40.89-21.34 60.11-32.54 48.21-29.74 67.13-58.69q18.89-28.88 35.05-83.17" />
            <path d="m289.47 515.18h16.46a136.55 136.55 0 0 0 58.4-13.61c27.4-13.2 35.59-20.06 53.26-36.1s32.88-37 45.16-65.08 15-54.85 15.83-74.86-8.61-53.59-18.21-66.42-40.9-21.34-60.12-32.54-48.16-29.74-67.13-58.69q-18.92-28.89-35-83.17" />
            <path d="m365.33 500.69c19.22 52 71.85 80.91 95.87 94.49s117.63 46.41 97.63 30.41-41.61-81.21-49.63-128-1.88-110.45 2.92-139.23 11.28-81.38 11.11-107-11.61-84.09-34.37-116.75-34.34-47-74.28-56.48q-39.91-9.4-117.46 7.56" />
            <path d="m298.12 303.81c-7.52.29-11.16 4.89-13.12 9.32s-2.67 15.58-6.1 32.79-9.77 25.94-22.51 32.79-35.26 11.74-49 12.74-37.22-1-48-3.42-23.47-7.36-32.29-18.59-11.61-41.23-9.56-57.52 8.56-47.25 26.69-55.56 94-15.67 108.19-16.63c9.48-.67 24.69-1.29 45.66-2" />
            <path d="m297.16 303.81c7.52.29 11.15 4.89 13.11 9.32s2.68 15.58 6.1 32.79 9.78 25.94 22.52 32.79 35.26 11.78 49 12.74 37.22-1 47.95-3.42 23.48-7.36 32.29-18.59 11.16-36.26 9.4-56.31-8.44-48.46-26.52-56.77-94-15.67-108.15-16.67q-14.24-1-45.66-2" />
          </LogoGroup>
          <HashEye fontSize="123.36" transform="translate(354.69 361.48)">
            #
          </HashEye>
          <HashEye fontSize="123.36" transform="translate(164.61 361.48)">
            #
          </HashEye>
        </LogoSvg>
      </a>
      <StyledMenu isIntersecting={isIntersecting}>
        <StyledLink href="#community">Community</StyledLink>
        <StyledLink href="#members">Members</StyledLink>
        <StyledLink href="#gallery">Gallery</StyledLink>
        <StyledLink href="/join">Join</StyledLink>
      </StyledMenu>
    </MenuBar>
  )
}

export default View
