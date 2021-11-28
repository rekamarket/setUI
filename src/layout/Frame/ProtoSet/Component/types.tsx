import { BlockLayerProps } from 'layers'
import type { Props as TextLayerProps } from 'reason/layers/Text'
import { CharsPerLineProps } from '../css'

export type AsType = 'div' | 'section'

export type Props = {
  as: AsType
  className?: string
  children?: JSX.Element | Array<JSX.Element>
} & CharsPerLineProps &
  BlockLayerProps &
  TextLayerProps
