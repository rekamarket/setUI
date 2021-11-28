import type { Props as TextLayerProps } from 'reason/layers/Text'

export type Props = {
  datetime: string
  title?: string
} & TextLayerProps
