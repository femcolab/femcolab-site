import { css } from 'styled-components'

type Breakpoints = { [key: string]: number }

export const sizes: Breakpoints = {
  small: 567,
  medium: 768,
  large: 992,
}

type Media = {
  small: () => void
  medium: () => void
  large: () => void
}

const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (
    literals: TemplateStringsArray,
    ...placeholders: string[]
  ) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(literals, ...placeholders)}
    }
  `
  return acc
}, {} as Media)

export default media
