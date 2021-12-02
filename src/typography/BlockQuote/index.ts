import { Props, Idiomatic as Set } from './Set'

type CompoundedComponent = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLElement>
>

const BlockQuote = Set as CompoundedComponent

export { blockQuote, playbook as blockQuotePlaybook } from './Set'
export type { Props } from './Set'
export default BlockQuote
