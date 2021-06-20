import { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio } from 'CSS'
import { Radius, Size, Theme, Variant } from '../css'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'
import { useRadius, useSize, useTheme, useVariant } from '../../context'

const Button: VFC<PropsRequired> = ({
  aspectRatio,
  disabled,
  className,
  defaultStyle,
  children,
  ...rest
}) => {
  const radius = useRadius()
  const size = useSize()
  const theme = useTheme()
  const variant = useVariant()

  return createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,

        rest?.radius
          ? Radius[rest?.radius]
          : radius
          ? Radius[radius]
          : defaultStyle?.radius
          ? Radius[defaultStyle.radius]
          : Radius.default,
        rest?.size
          ? Size[rest?.size]
          : size
          ? Size[size]
          : defaultStyle?.size
          ? Size[defaultStyle.size]
          : Size.default,
        rest?.theme
          ? Theme[rest?.theme]
          : theme
          ? Theme[theme]
          : defaultStyle?.theme
          ? Theme[defaultStyle.theme]
          : Theme.default,
        rest?.variant
          ? Variant[rest?.variant]
          : variant
          ? Variant[variant]
          : defaultStyle?.variant
          ? Variant[defaultStyle.variant]
          : Variant.default,
        AspectRatio[aspectRatio] || AspectRatio.default,
      ]),

      disabled,

      ...('onClick' in rest ? { type: 'button' } : {}),
      ...rest,
    },

    children
  )
}

export type { Props, PropsRequired } from './types'

export default Button
