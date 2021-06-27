import { VFC, createElement } from 'react'
import cn from 'classnames'
import { TextTransform } from 'CSS'
import { Radius, Shape, Size, Theme, Variant } from './css'
import { Props } from './types'
import { ClassName } from './styles.css'

const ProtoComponent: VFC<Props> = ({
  disabled,
  className,
  radius,
  shape,
  size,
  theme,
  transform,
  variant,
  children,
  ...rest
}) =>
  createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,

        Radius[radius],
        Shape[shape],
        Size[size],
        Theme[theme],
        TextTransform[transform],
        Variant[variant],
      ]),

      disabled,

      ...('onClick' in rest ? { type: 'button' } : {}),
      ...rest,
    },

    children
  )

export {
  Radius,
  radiusResolve,
  useRadius,
  RadiusContext,
  Shape,
  shapeResolve,
  useShape,
  ShapeContext,
  Size,
  sizeResolve,
  useSize,
  SizeContext,
  Theme,
  themeResolve,
  useTheme,
  ThemeContext,
  Variant,
  VariantBasic,
  variantResolve,
  useVariant,
  VariantContext,
} from './css'
export type { Props, StyleProps } from './types'
export default ProtoComponent
