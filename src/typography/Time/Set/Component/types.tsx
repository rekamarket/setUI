import type { BlockLayerProps, TextLayerProps } from 'layers'

export type Props = {
  datetime: string
  title?: string
} & BlockLayerProps &
  TextLayerProps
