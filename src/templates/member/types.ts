type Data = {
  markdownRemark: {
    html: string
    frontmatter: {
      name: string
      memberSince: string
    }
  }
}

type PageContext = {
  currentPath: string
  previousPath?: string
  nextPath?: string
}

export type MemberProps = {
  data: Data
  pageContext: PageContext
}
