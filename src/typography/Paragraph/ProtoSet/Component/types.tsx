import type { ZIndexType } from 'CSS'
import type { BlockLayerProps, TextLayerProps } from 'layers'

export type Props = {
  className?: string

  zIndex?: ZIndexType
} & BlockLayerProps &
  TextLayerProps
