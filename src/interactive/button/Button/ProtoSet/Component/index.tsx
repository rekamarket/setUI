import { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, BorderRadius } from 'CSS'
import {
  Size,
  sizeResolve,
  Theme,
  themeResolve,
  Variant,
  variantResolve,
} from '../../../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { useSize, useTheme, useVariant } from '../../context'

const Button: VFC<Props> = ({
  aspectRatio,
  borderRadius,
  disabled,
  className,
  children,
  ...rest
}) => {
  const size = useSize()
  const theme = useTheme()
  const variant = useVariant()

  return createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,
        rest?.size ? Size[rest?.size] : size ? Size[size] : Size.default,
        rest?.theme ? Theme[rest?.theme] : theme ? Theme[theme] : Theme.default,
        rest?.variant
          ? Variant[rest?.variant]
          : variant
          ? Variant[variant]
          : Variant.default,
        AspectRatio[aspectRatio] || AspectRatio.default,
        BorderRadius[borderRadius] || BorderRadius.default,
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
