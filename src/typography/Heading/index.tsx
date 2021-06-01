import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component/Heading'
import { Thin } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Thin: typeof Thin

  // supersets
  Placeholder: typeof Placeholder
}

const Heading: I<ComponentProps> = (props) => Component(props)

// subsets
Heading.Thin = Thin

// supersets
Heading.Placeholder = Placeholder

export default Heading
