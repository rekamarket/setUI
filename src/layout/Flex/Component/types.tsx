import type {
  // flex
  AlignContentType,
  AlignItemsType,
  FlexDirectionType,
  FlexWrapType,
  JustifyContentType,

  // generic
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  GapType,
  MarginSizeType,
  PaddingSizeType,
  ZIndexType,
} from 'CSS'

export type Props = {
  children?: JSX.Element | Array<JSX.Element>

  // flex
  alignContent?: AlignContentType
  alignItems?: AlignItemsType
  direction?: FlexDirectionType
  wrap?: FlexWrapType
  justifyContent?: JustifyContentType

  // generic
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
