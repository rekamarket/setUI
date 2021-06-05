import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // supersets
  Placeholder: typeof Placeholder
}

const Paragraph: I<ComponentProps> = (props) => Component(props)

// supersets
Paragraph.Placeholder = Placeholder

export default Paragraph
