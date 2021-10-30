import { FC } from 'react'
import { Props, Idiomatic as Set } from './Set'
import { TextBlockConfigurable as TextBlock } from './Subsets'
// import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  TextBlock: typeof TextBlock
  // supersets
  // Placeholder: typeof Placeholder
}

const Paragraph: I<Props> = (props) => Set(props)

Paragraph.TextBlock = TextBlock

// supersets
// Heading.Placeholder = Placeholder

export {
  TextBlockIdiomatic as TextBlock,
  TextBlockSnippets,
  textBlock,
} from './Subsets'
export { default as ParagraphSnippets } from './Set/Idiomatic/snippets'
export { paragraph } from './Set'
export type { Props } from './Set'
export default Paragraph
