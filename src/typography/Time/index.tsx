import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Time: I<ComponentProps> = (props) => Component(props)

Time.Placeholder = Placeholder

export default Time
