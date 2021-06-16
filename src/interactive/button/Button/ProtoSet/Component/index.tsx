import { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio } from 'CSS'
import { Radius, Size, Theme, Variant } from '../../../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { useRadius, useSize, useTheme, useVariant } from '../../context'

const Button: VFC<Props> = ({
  aspectRatio,
  disabled,
  className,
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
          : Radius.default,
        rest?.size ? Size[rest?.size] : size ? Size[size] : Size.default,
        rest?.theme ? Theme[rest?.theme] : theme ? Theme[theme] : Theme.default,
        rest?.variant
          ? Variant[rest?.variant]
          : variant
          ? Variant[variant]
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
