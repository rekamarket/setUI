import { tuple } from 'utils'
import type { AspectRatioType, ZIndexType } from 'CSS'
import type { BlockLayerProps } from 'layers'
import type { Props as FlexLayerProps } from 'reason/layers/Flex'

const Tags = ['section', 'article', 'div', 'span']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  as?: AsType

  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps &
  FlexLayerProps
