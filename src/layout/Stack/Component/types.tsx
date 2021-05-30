import { tuple } from 'utils'
import type {
  GapType,
  JustifyContentType,
  MarginSizeType,
  PaddingSizeType,
  TextAlignType,
  FontFamilyType,
  FontSizeType,
} from 'CSS'

const Tags = ['div', 'ul', 'li', 'dl']
const TAGS = tuple(...Tags)
export type AsType = typeof TAGS[number]

export type Props = {
  as?: AsType
  align?: TextAlignType
  type?: FontFamilyType
  size?: FontSizeType

  justifyContent?: JustifyContentType

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
