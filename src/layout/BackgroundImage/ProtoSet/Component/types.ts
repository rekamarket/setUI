import type { Props as BlockLayerProps } from 'reason/layers/Block'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'

export type AsType = 'main' | 'section' | 'div'

export type Props = {
  as: AsType
  image: string
  className?: string
} & BlockLayerProps &
  FlexLayerProps
