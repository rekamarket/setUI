import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

Text.Placeholder = Placeholder

export default Text
