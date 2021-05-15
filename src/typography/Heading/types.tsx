import type {
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
  ColorType,
} from 'theme'

export type LevelType = 1 | 2 | 3 | 4

export type Props = {
  level: LevelType
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
