import Set from './Set'
import type { Props } from './Set'

import {
  ParagraphGeneric as Paragraph,
  TextBlockGeneric as TextBlock,
} from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Paragraph: typeof Paragraph
  TextBlock: typeof TextBlock
}

const TextContainer = Set as CompoundedComponent

// subsets
TextContainer.Paragraph = Paragraph
TextContainer.TextBlock = TextBlock

export type { Props } from './types'
export { textContainer } from './Set'

export {
  Paragraph,
  paragraph,
  TextBlock,
  textBlock,
} from './Subsets'

export default TextContainer
