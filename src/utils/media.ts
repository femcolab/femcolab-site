import { css } from 'styled-components'

type Breakpoints = { [key: string]: number }

export const sizes: Breakpoints = {
  small: 567,
  medium: 768,
  large: 992,
}

interface Media {
  small(...template: TemplateStringsArray<T>[]): string
  medium(...template: TemplateStringsArray<T>[]): string
  large(...template: TemplateStringsArray<T>[]): string
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
