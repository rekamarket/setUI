import { FC } from 'react'
import Set, { Props } from './Set'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // Placeholder: typeof Placeholder
}

const Link: I<Props> = (props) => Set(props)

// Link.Placeholder = Placeholder

export { default as LinkSnippets } from './Set/snippets'
export default Link
