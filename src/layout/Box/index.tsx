import React, { VFC } from 'react'
import Component, { Props as ComponentProps } from './Component'
// import { x16x9, x4x3, x1x1 } from './subsets'
// import { Placeholder } from './supersets'

interface I<T = unknown> extends VFC<T> {
  // subsets
  // x16x9: typeof x16x9
  // x4x3: typeof x4x3
  // x1x1: typeof x1x1
  // supersets
  // Placeholder: typeof Placeholder
}

const Box: I<ComponentProps> = (props) => Component(props)

// subsets
// Box.x16x9 = x16x9
// Box.x4x3 = x4x3
// Box.x1x1 = x1x1

// supersets
// Box.Placeholder = Placeholder

export default Box
