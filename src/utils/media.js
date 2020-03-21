import { css } from 'styled-components'

export const sizes = {
  small: 567,
  medium: 768,
  large: 992,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default media
