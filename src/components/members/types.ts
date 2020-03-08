import { ReactElement } from 'react'

export type MemberLinks = () => ReactElement

export type MemberProps = {
  node: {
    frontmatter: {
      name: string
    }
  }
}
