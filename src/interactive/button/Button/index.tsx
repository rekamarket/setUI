import { VFC } from 'react'
import Set, { Props } from './Set'

interface I<T = unknown> extends VFC<T> {}

const Button: I<Props> = (props) => Set(props)

export type { Props } from './Set'
export default Button
