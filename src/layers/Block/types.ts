import { MarginProps } from './margin'
import {
  BorderColorProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderThicknessProps,
} from './border'
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
import { PaddingProps } from './padding'

type BorderProps = BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderThicknessProps
type BackgroundProps = BackgroundAttachmentProps & any // & BackgroundClipProps & BackgroundColorProps & BackgroundOpacityProps & BackgroundOriginProps & BackgroundPositionProps & BackgroundRepeatProps & BackgroundSizeProps

export type Props = MarginProps & BorderProps & BackgroundProps & PaddingProps

export type Config = {
  mutations?: any
  useBackground?: boolean
  useBorder?: boolean
  useMargin?: boolean
  usePadding?: boolean
}

export type { MarginType } from './margin'
export type {
  BorderColorType,
  BorderRadiusType,
  BorderStyleType,
  BorderThicknessType,
} from './border'
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
export type { PaddingType } from './padding'
