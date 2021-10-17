import { FC } from 'react'
import Set, { Props } from './Set'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // supersets
  // Placeholder: typeof Placeholder
}

const Paragraph: I<Props> = (props) => Set(props)

// supersets
// Heading.Placeholder = Placeholder

export { default as ParagraphSnippets } from './Set/snippets'
export type { Props } from './Set'
export default Paragraph
