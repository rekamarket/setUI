import { VFC } from 'react'
import Set, { Props } from './Set'
import { Group } from './Supersets'

interface I<T = unknown> extends VFC<T> {
  Group: typeof Group
}

const Button: I<Props> = (props) => Set(props)

Button.Group = Group

export type { Props } from './Set'
export default Button
