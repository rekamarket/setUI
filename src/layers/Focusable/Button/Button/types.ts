import { ShapeProps, SizeProps, VariantProps } from '../css'

export type Props = ShapeProps & SizeProps & VariantProps

export type ConfigOverride = {
  mutations?: any
}

export type { ShapeType, SizeType, VariantType } from '../css'
