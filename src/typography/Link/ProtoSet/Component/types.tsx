import type { Props as TextLayerProps } from 'reason/layers/Text'
import type { LinkLayerProps } from 'layers'

export type Props = {
  href: string
  title?: string
  className?: string
} & LinkLayerProps &
  TextLayerProps
