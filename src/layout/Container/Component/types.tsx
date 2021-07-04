import { tuple } from 'utils'
import type { AspectRatioType, ZIndexType } from 'CSS'
import { BlockLayerProps } from 'layers'
import { DirectionType, MaxWidthType } from '../css'

const Tags = ['div', 'section']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  children?: JSX.Element | Array<JSX.Element>
  as?: AsType

  // custom
  size?: MaxWidthType
  direction?: DirectionType

  // generic
  aspectRatio?: AspectRatioType

  zIndex?: ZIndexType
} & BlockLayerProps
