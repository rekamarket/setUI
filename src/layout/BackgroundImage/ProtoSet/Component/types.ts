import type { BlockLayerProps } from 'layers'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'

export type AsType = 'main' | 'section' | 'div'

export type Props = {
  as: AsType
  image: string
  className?: string
} & BlockLayerProps &
  FlexLayerProps
