import { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio } from 'CSS'
import { Radius, Size, Theme, Variant } from '../css'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'

const Button: VFC<PropsRequired> = ({
  aspectRatio,
  disabled,
  className,
  defaultStyle,
  children,
  ...rest
}) => {
  return createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,

        rest?.radius
          ? Radius[rest?.radius]
          : defaultStyle?.radius
          ? Radius[defaultStyle.radius]
          : Radius.default,
        rest?.size
          ? Size[rest?.size]
          : defaultStyle?.size
          ? Size[defaultStyle.size]
          : Size.default,
        rest?.theme
          ? Theme[rest?.theme]
          : defaultStyle?.theme
          ? Theme[defaultStyle.theme]
          : Theme.default,
        rest?.variant
          ? Variant[rest?.variant]
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
