import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { x16x9, x4x3, x1x1 } from './subsets'

interface I<T = unknown> extends FC<T> {
  x16x9: typeof x16x9
  x4x3: typeof x4x3
  x1x1: typeof x1x1
}

const Box: I<ComponentProps> = (props) => Component(props)

Box.x16x9 = x16x9
Box.x4x3 = x4x3
Box.x1x1 = x1x1

export default Box
