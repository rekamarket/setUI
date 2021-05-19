import type {
  AspectRatioType,
  MarginSizeType,
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
} from 'CSS'

export type Props = {
  align?: TextAlignType
  type?: FontFamilyType
  size?: FontSizeType

  aspectRatio?: AspectRatioType

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
