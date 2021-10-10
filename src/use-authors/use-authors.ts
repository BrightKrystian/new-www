import { Author } from './authors-frontmatter-query-result'
import { useAuthorsAvatars120 } from './use-authors-avatar-120'
import { useAuthorsAvatarsDefault } from './use-authors-avatar-default'

type UseAuthorsParams = {
  authorId?: string
  avatarSize?: { width: 120 }
}

function toAuthorsFilter(props: UseAuthorsParams): (author: Author) => boolean {
  if (props.authorId) {
    return (author: Author) => props.authorId === author.authorId
  }
  return ({ ex }) => !ex
}

export const useAuthors = (props: UseAuthorsParams = {}) => {
  let data: Author[]

  switch (props.avatarSize?.width) {
    case 120:
      data = useAuthorsAvatars120()
      break
    default:
      data = useAuthorsAvatarsDefault()
      break
  }

  const authorsFilter = toAuthorsFilter(props)

  return data.filter(authorsFilter)
}
