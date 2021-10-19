import { FC } from 'react'
import { Props, Configurable as Set } from './Set'
import { DivConfigurable as Div } from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  Div: typeof Div
  // supersets
  // Placeholder: typeof Placeholder
}

const Paragraph: I<Props> = (props) => Set(props)

Paragraph.Div = Div

// supersets
// Heading.Placeholder = Placeholder

export { DivIdiomatic as Div, DivSnippets } from './Subsets'
export { default as ParagraphSnippets } from './Set/Idiomatic/snippets'
export type { Props } from './Set'
export default Paragraph
