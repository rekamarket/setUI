import type { DisplayType } from 'CSS'
import type { BlockLayerProps, TextLayerProps } from 'layers'

export type AsType = 'q' | 'blockquote'

export type Props = {
  as?: AsType
  cite?: string
  title?: string
  className?: string
  truncate?: boolean

  display?: DisplayType
} & BlockLayerProps &
  TextLayerProps
