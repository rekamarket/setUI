import { Radius, radiusResolve } from './radius'
import { Shape, shapeResolve } from './shape'
import { Size, sizeResolve } from './size'
import { Theme, themeResolve } from './theme'
import { Variant, variantResolve } from './variant'

import type {
  ConfigOverride,
  Props,
  RadiusType,
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from './types'

class ButtonLayer {
  CSSradius: RadiusType
  CSSshape: ShapeType
  CSSsize: SizeType
  CSStheme: ThemeType
  CSSvariant: VariantType

  constructor(config?: ConfigOverride) {}

  public set(props: Props) {
    this.CSSradius = radiusResolve<Props>(props)
    this.CSSshape = shapeResolve<Props>(props)
    this.CSSsize = sizeResolve<Props>(props)
    this.CSStheme = themeResolve<Props>(props)
    this.CSSvariant = variantResolve<Props>(props)

    return this
  }

  public get radius() {
    return Radius[this.CSSradius]
  }

  public get shape() {
    return Shape[this.CSSshape]
  }

  public get size() {
    return Size[this.CSSsize]
  }

  public get theme() {
    return Theme[this.CSStheme]
  }

  public get variant() {
    return Variant[this.CSSvariant]
  }

  public get box() {
    return [this.radius, this.shape, this.size, this.theme, this.variant]
      .filter(Boolean)
      .join(' ')
  }
}

export {
  Radius,
  useRadius,
  radiusResolve,
  RadiusContext,
  RadiusKeys,
} from './radius'
export { Shape, useShape, shapeResolve, ShapeContext, ShapeKeys } from './shape'
export { Size, useSize, sizeResolve, SizeContext, SizeKeys } from './size'
export { Theme, useTheme, themeResolve, ThemeContext, ThemeKeys } from './theme'
export {
  Variant,
  useVariant,
  variantResolve,
  VariantContext,
  VariantKeys,
} from './variant'

export type { Props } from './types'
export default ButtonLayer
