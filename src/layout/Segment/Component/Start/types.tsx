import { tuple } from 'utils'
import type {
  AspectRatioType,
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  GapType,
  MarginSizeType,
  PaddingSizeType,
  ZIndexType,
} from 'CSS'

const Tags = ['header', 'div', 'span']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  as?: AsType

  aspectRatio?: AspectRatioType

  background?: BackgroundColorType

  borderColor?: BorderColorType
  borderRadius?: BorderRadiusType
  borderWidth?: BorderWidthType

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

  zIndex?: ZIndexType
}
