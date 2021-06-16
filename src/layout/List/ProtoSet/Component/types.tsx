import type {
  // flex
  AlignContentType,
  AlignItemsType,
  FlexWrapType,
  JustifyContentType,

  // generic
  BackgroundProps,
  BackgroundOpacityProps,
  BorderColorType,
  BorderRadiusType,
  BorderWidthType,
  GapType,
  MarginSizeType,
  PaddingSizeType,
  ZIndexType,
  WidthType,
} from 'CSS'
import { DirectionProps, DividerColorProps, DividerWeightProps } from '../css'

type BasicProps = {
  children?: JSX.Element | Array<JSX.Element>
  className?: string
}

type Styles = BackgroundProps &
  BackgroundOpacityProps &
  DirectionProps &
  DividerColorProps &
  DividerWeightProps

type StyleProps = {
  // flex
  alignContent?: AlignContentType
  alignItems?: AlignItemsType
  wrap?: FlexWrapType
  justifyContent?: JustifyContentType

  // generic
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
  width?: WidthType
} & Styles

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
