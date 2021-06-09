import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component/Heading'
import { H1, Thin } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  H1: typeof H1
  Thin: typeof Thin

  // supersets
  Placeholder: typeof Placeholder
}

const Heading: I<ComponentProps> = (props) => Component(props)

// subsets
Heading.H1 = H1
Heading.Thin = Thin

// supersets
Heading.Placeholder = Placeholder

export default Heading
