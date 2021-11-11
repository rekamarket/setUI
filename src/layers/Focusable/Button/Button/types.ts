import { ThemeProps } from '../../css'
import { ShapeProps, SizeProps, VariantProps } from '../css'

export type Props = ThemeProps & ShapeProps & SizeProps & VariantProps

export type ConfigOverride = {
  mutations?: any
}

export type { ThemeType } from '../../css'
export type { ShapeType, SizeType, VariantType } from '../css'
