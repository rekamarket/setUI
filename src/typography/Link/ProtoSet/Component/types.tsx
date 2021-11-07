import type { LinkLayerProps, TextLayerProps } from 'layers'

export type Props = {
  href: string
  title?: string
  className?: string
} & LinkLayerProps &
  TextLayerProps
