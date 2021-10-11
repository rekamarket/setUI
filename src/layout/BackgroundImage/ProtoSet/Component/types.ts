import type { BlockLayerProps, FlexLayerProps } from 'layers'

export type AsType = 'main' | 'section' | 'div'

export type Props = {
  as: AsType
  image: string
  className?: string
} & BlockLayerProps &
  FlexLayerProps
