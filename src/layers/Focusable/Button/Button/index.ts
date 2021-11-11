import { Theme, themeResolve } from '../../css'

import {
  Shape,
  shapeResolve,
  Size,
  sizeResolve,
  Variant,
  variantResolve,
} from '../css'

import type {
  ConfigOverride,
  Props,
  ThemeType,
  ShapeType,
  SizeType,
  VariantType,
} from './types'

class ButtonLayer {
  CSStheme: ThemeType
  CSSshape: ShapeType
  CSSsize: SizeType
  CSSvariant: VariantType

  constructor(config?: ConfigOverride) {}

  public set(props: Props) {
    this.CSStheme = themeResolve<Props>(props)
    this.CSSshape = shapeResolve<Props>(props)
    this.CSSsize = sizeResolve<Props>(props)
    this.CSSvariant = variantResolve<Props>(props)

    return this
  }

  public get theme() {
    return Theme[this.CSStheme]
  }

  public get shape() {
    return Shape[this.CSSshape]
  }

  public get size() {
    return Size[this.CSSsize]
  }

  public get variant() {
    return Variant[this.CSSvariant]
  }

  public get box() {
    return [this.theme, this.shape, this.size, this.variant]
      .filter(Boolean)
      .join(' ')
  }
}

export {
  Theme,
  useTheme,
  themeResolve,
  ThemeContext,
  ThemeKeys,
} from '../../css'

export {
  Shape,
  useShape,
  shapeResolve,
  ShapeContext,
  ShapeKeys,
  Size,
  useSize,
  sizeResolve,
  SizeContext,
  SizeKeys,
  Variant,
  useVariant,
  variantResolve,
  VariantContext,
  VariantKeys,
} from '../css'

export type { Props } from './types'
export default ButtonLayer
