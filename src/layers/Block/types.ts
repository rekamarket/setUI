import { MarginProps } from './margin'
import {
  BorderColorProps,
  BorderRadiusProps,
  BorderThicknessProps,
} from './border'
import { BackgroundColorProps, BackgroundOpacityProps } from './background'
import { PaddingProps } from './padding'

type BorderProps = BorderColorProps & BorderRadiusProps & BorderThicknessProps
type BackgroundProps = BackgroundColorProps & BackgroundOpacityProps

export type Props = MarginProps & BorderProps & BackgroundProps & PaddingProps

export type { MarginType } from './margin'
export type {
  BorderColorType,
  BorderRadiusType,
  BorderThicknessType,
} from './border'
export type { BackgroundColorType, BackgroundOpacityType } from './background'
export type { PaddingType } from './padding'
