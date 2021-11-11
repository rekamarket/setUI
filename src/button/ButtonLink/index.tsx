import { VFC } from 'react'
import Set, { Props } from './Set'

interface I<T = unknown> extends VFC<T> {}

const ButtonLink: I<Props> = (props) => Set(props)

export { default as ProtoSet } from './ProtoSet'
export type { Props as ProtoSetProps } from './ProtoSet'
export type { Props } from './Set'
export default ButtonLink
