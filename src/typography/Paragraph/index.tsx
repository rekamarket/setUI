import { FC } from 'react'
import { Props, Configurable as Set } from './Set'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // supersets
  // Placeholder: typeof Placeholder
}

const Paragraph: I<Props> = (props) => Set(props)

// supersets
// Heading.Placeholder = Placeholder

export { default as ParagraphSnippets } from './Set/Idiomatic/snippets'
export type { Props } from './Set'
export default Paragraph
