import { Props, Idiomatic as Set } from './Set'
// import { TextBlockConfigurable as TextBlock } from './Subsets'

type CompoundedComponent = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLElement>
>

const Button = Set as CompoundedComponent
// Paragraph.TextBlock = TextBlock

// export { TextBlockIdiomatic as TextBlock, textBlock } from './Subsets'
export { buttonLink } from './Set'
export type { Props } from './Set'
export default Button
