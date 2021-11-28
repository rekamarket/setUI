import type { ZIndexType, WidthType } from 'CSS'
import type { Props as BlockLayerProps } from 'reason/layers/Block'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  className?: string

  zIndex?: ZIndexType
  width?: WidthType
} & BlockLayerProps &
  FlexLayerProps
