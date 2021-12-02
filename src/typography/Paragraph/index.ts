import { Props, Idiomatic as Set } from './Set'
import { TextBlockConfigurable as TextBlock } from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  TextBlock: typeof TextBlock
}

const Paragraph = Set as CompoundedComponent
Paragraph.TextBlock = TextBlock

export { TextBlockIdiomatic as TextBlock, textBlock } from './Subsets'
export { paragraph } from './Set'
export type { Props } from './Set'
export default Paragraph
