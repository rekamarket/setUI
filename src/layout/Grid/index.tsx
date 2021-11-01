import React, { VFC } from 'react'
import Component, { Props } from './Component'
import { Spiral } from './subsets'

interface I<T = unknown> extends VFC<T> {
  Spiral: typeof Spiral
}

const Grid: I<Props> = (props) => Component(props)

Grid.Spiral = Spiral

export { Spiral } from './subsets'
export type { Props } from './Component'
export default Grid
