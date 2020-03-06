type CreateSlugType = (name: string) => string

export const createSlug: CreateSlugType = name =>
  name
    .split(' ')
    .join('-')
    .toLowerCase()
