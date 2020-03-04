import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

type ThemeProps = {
  primaryDark?: string
  primaryLight?: string
  primaryPurple?: string
  mobile?: string
}

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Fira Code', sans-serif;
    background: ${({ theme }: { theme: ThemeProps }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
`
