import type { ZIndexType, WidthType } from 'CSS'
import type { BlockLayerProps, FlexLayerProps } from 'layers'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  className?: string

  zIndex?: ZIndexType
  width?: WidthType
} & BlockLayerProps &
  FlexLayerProps
