import type { ZIndexType } from 'CSS'
import type { Props as TextLayerProps } from 'reason/layers/Text'
import type { BlockLayerProps } from 'layers'

export type AsType = 'p' | 'div'

export type Props = {
  as: AsType
  className?: string

  zIndex?: ZIndexType
} & BlockLayerProps &
  TextLayerProps
