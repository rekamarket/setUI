import type {
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontStyleType,
  FontWeightType,
  PaddingSizeType,
} from 'CSS'

export type Props = {
  datetime: string
  title?: string
  truncate?: boolean

  color?: ColorType

  type?: FontFamilyType
  size?: FontSizeType
  style?: FontStyleType
  weight?: FontWeightType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
