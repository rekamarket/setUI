import { VFC, createElement } from 'react'
import cn from 'classnames'
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
        Variant[variant],
      ]),

      disabled,

      ...('onClick' in rest ? { type: 'button' } : {}),
      ...rest,
    },

    children
  )

export {
  radiusResolve,
  useRadius,
  RadiusContext,
  shapeResolve,
  useShape,
  ShapeContext,
  sizeResolve,
  useSize,
  SizeContext,
  themeResolve,
  useTheme,
  ThemeContext,
  variantResolve,
  useVariant,
  VariantContext,
} from './css'
export type { Props, StyleProps } from './types'
export default ProtoComponent
