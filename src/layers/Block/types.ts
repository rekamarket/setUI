import {
  BackgroundAttachmentProps,
  BackgroundClipProps,
  BackgroundColorProps,
  BackgroundOpacityProps,
  BackgroundOriginProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  BackgroundSizeProps,
} from './background'
import {
  BorderColorProps,
  BorderStyleProps,
  BorderThicknessProps,
} from './border'
import { CornerRadiusProps } from './corner'
import { MarginProps } from './margin'
import { PaddingProps } from './padding'
import { TextAlignProps } from './text'

export type BorderProps = BorderColorProps &
  BorderStyleProps &
  BorderThicknessProps
export type BackgroundProps = BackgroundAttachmentProps & any // & BackgroundClipProps & BackgroundColorProps & BackgroundOpacityProps & BackgroundOriginProps & BackgroundPositionProps & BackgroundRepeatProps & BackgroundSizeProps
export type CornerProps = CornerRadiusProps
export type TextProps = TextAlignProps

export type { MarginProps } from './margin'
export type { PaddingProps } from './padding'

export type Props = MarginProps &
  BorderProps &
  BackgroundProps &
  PaddingProps &
  CornerProps &
  TextProps

export type Config = {
  mutations?: any
  useBackground?: boolean
  useBorder?: boolean
  useMargin?: boolean
  usePadding?: boolean
  useCorner?: boolean
  useText?: boolean
}

export type {
  BackgroundAttachmentType,
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOpacityType,
  BackgroundOriginType,
  BackgroundPositionType,
  BackgroundRepeatType,
  BackgroundSizeType,
} from './background'
export type {
  BorderColorType,
  BorderStyleType,
  BorderThicknessType,
} from './border'
export type { CornerRadiusType } from './corner'
export type { MarginType } from './margin'
export type { PaddingType } from './padding'
export type { TextAlignType } from './text'
