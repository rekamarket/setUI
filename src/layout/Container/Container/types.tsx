import { tuple } from 'utils'
import type { GapType, MarginSizeType, PaddingSizeType } from 'CSS'
import { DirectionType, MaxWidthType } from '../css'

const Tags = ['div', 'section']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  as?: AsType

  size?: MaxWidthType
  direction?: DirectionType

  gap?: GapType
  gapX?: GapType
  gapY?: GapType

  margin?: MarginSizeType
  marginX?: MarginSizeType
  marginY?: MarginSizeType
  marginTop?: MarginSizeType
  marginRight?: MarginSizeType
  marginBottom?: MarginSizeType
  marginLeft?: MarginSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
