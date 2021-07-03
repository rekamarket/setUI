import { MarginProps } from './margin'
import {
  BorderColorProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderThicknessProps,
} from './border'
import {
  BackgroundClipProps,
  BackgroundColorProps,
  BackgroundOpacityProps,
} from './background'
import { PaddingProps } from './padding'

type BorderProps = BorderColorProps &
  BorderRadiusProps &
  BorderStyleProps &
  BorderThicknessProps
type BackgroundProps = BackgroundClipProps &
  BackgroundColorProps &
  BackgroundOpacityProps

export type Props = MarginProps & BorderProps & BackgroundProps & PaddingProps

export type { MarginType } from './margin'
export type {
  BorderColorType,
  BorderRadiusType,
  BorderStyleType,
  BorderThicknessType,
} from './border'
export type {
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOpacityType,
} from './background'
export type { PaddingType } from './padding'
