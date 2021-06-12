import { FC } from 'react'
import Set, { Props } from './Set'
import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Time: I<Props> = (props) => Set(props)

Time.Placeholder = Placeholder

export default Time
