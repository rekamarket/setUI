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
  ShapeType,
  SizeType,
  VariantType,
} from './types'

class ButtonLayer {
  CSSshape: ShapeType
  CSSsize: SizeType
  CSSvariant: VariantType

  constructor(config?: ConfigOverride) {}

  public set(props: Props) {
    this.CSSshape = shapeResolve<Props>(props)
    this.CSSsize = sizeResolve<Props>(props)
    this.CSSvariant = variantResolve<Props>(props)

    return this
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
    return [this.shape, this.size, this.variant].filter(Boolean).join(' ')
  }
}

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
