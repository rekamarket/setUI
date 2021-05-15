import type {
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
  ColorType,
} from 'theme'

export type AsType = 'span' | 'div' | 'p'

export type Props = {
  as?: AsType
  weight?: 'regular' | 'weak'
  truncate?: boolean

  color?: ColorType
  align?: TextAlignType
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
