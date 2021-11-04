import { RadiusProps } from './radius'
import { ShapeProps } from './shape'
import { SizeProps } from './size'
import { ThemeProps } from './theme'
import { VariantProps } from './variant'

export type Props = RadiusProps &
  ShapeProps &
  SizeProps &
  ThemeProps &
  VariantProps

export type ConfigOverride = {
  mutations?: any
}

export type { RadiusType } from './radius'
export type { ShapeType } from './shape'
export type { SizeType } from './size'
export type { ThemeType } from './theme'
export type { VariantType } from './variant'
