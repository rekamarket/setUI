import type { ButtonLayerProps } from 'layers'
import type { Props as FlexProps } from 'layout/Flex'

export type Props = {
  children: any
} & ButtonLayerProps &
  FlexProps
