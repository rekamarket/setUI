import type { ZIndexType } from 'CSS'
import type { BlockLayerProps, TextLayerProps } from 'layers'

export type AsType = 'p' | 'div'

export type Props = {
  as: AsType
  className?: string

  zIndex?: ZIndexType
} & BlockLayerProps &
  TextLayerProps
