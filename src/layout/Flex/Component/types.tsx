import type { ZIndexType, WidthType } from 'CSS'
import type { BlockLayerProps } from 'layers'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  className?: string

  zIndex?: ZIndexType
  width?: WidthType
} & BlockLayerProps &
  FlexLayerProps
