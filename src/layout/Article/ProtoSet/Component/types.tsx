import { BlockLayerProps, TextLayerProps } from 'layers'
import { LengthProps } from '../css'

export type AsType = 'div' | 'section'

export type Props = {
  as: AsType
  className?: string
  children?: JSX.Element | Array<JSX.Element>
} & LengthProps &
  BlockLayerProps &
  TextLayerProps
