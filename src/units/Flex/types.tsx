import type {
  AlignContentType,
  AlignItemsType,
  FlexDirectionType,
  FlexWrapType,
  JustifyContentType,
  GapType,
  MarginSizeType,
  PaddingSizeType,
} from '../../theme'

export type Props = {
  alignContent?: AlignContentType
  alignItems?: AlignItemsType
  direction?: FlexDirectionType
  wrap?: FlexWrapType
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
