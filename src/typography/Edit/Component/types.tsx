import type {
  BackgroundColorType,
  ColorType,
  FontFamilyType,
  FontSizeType,
  FontWeightType,
  PaddingSizeType,
} from 'CSS'

export type AsType = 'del' | 'ins'

export type Props = {
  as?: AsType
  cite?: string
  datetime?: string
  className?: string

  truncate?: boolean

  background?: BackgroundColorType
  color?: ColorType

  weight?: FontWeightType
  type?: FontFamilyType
  size?: FontSizeType

  padding?: PaddingSizeType
  paddingX?: PaddingSizeType
  paddingY?: PaddingSizeType
  paddingTop?: PaddingSizeType
  paddingRight?: PaddingSizeType
  paddingBottom?: PaddingSizeType
  paddingLeft?: PaddingSizeType
}
