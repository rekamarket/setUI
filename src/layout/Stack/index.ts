import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Stack: I<ComponentProps> = (props) => Component(props)

Stack.Placeholder = Placeholder

export default Stack
