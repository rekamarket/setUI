import type { Props as TextLayerProps } from 'reason/layers/Text'
import type { BlockLayerProps } from 'layers'

export type Props = {
  datetime: string
  title?: string
} & BlockLayerProps &
  TextLayerProps
