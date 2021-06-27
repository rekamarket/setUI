import { VFC } from 'react'
import Set, { Props } from './Set'
import { Icon } from './Subsets'
import { Flex, List } from './Supersets'

interface I<T = unknown> extends VFC<T> {
  // subsets
  Icon: typeof Icon

  // supersets
  $Flex: typeof Flex
  $List: typeof List
}

const Button: I<Props> = (props) => Set(props)

// subsets
Button.Icon = Icon

// supersets
Button.$Flex = Flex
Button.$List = List

// subsets
export { Icon } from './Subsets'
export type { IconProps } from './Subsets'

// supersets
export { Flex, List } from './Supersets'
export type { FlexProps, ListProps } from './Supersets'

export { default as ProtoSet } from './ProtoSet'
export type { Props as ProtoSetProps } from './ProtoSet'
export type { Props } from './Set'
export default Button
