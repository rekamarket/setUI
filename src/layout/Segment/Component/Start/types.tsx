import { tuple } from 'utils'
import type { AspectRatioType, ZIndexType } from 'CSS'
import type { BlockLayerProps, FlexLayerProps } from 'layers'

const Tags = ['header', 'div', 'span']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  as?: AsType

  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps &
  FlexLayerProps
