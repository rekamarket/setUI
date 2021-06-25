import { VFC } from 'react'
import Set, { Props } from './Set'
// import { Icon } from './Subsets'

interface I<T = unknown> extends VFC<T> {
  // subsets
  // Icon: typeof Icon
}

const Button: I<Props> = (props) => Set(props)

// subsets
// Button.Icon = Icon

// subsets
// export { Icon } from './Subsets'
// export type { IconProps } from './Subsets'

export { default as ProtoSet } from './ProtoSet'
export type { Props as ProtoSetProps } from './ProtoSet'
export type { Props } from './Set'
export default Button
