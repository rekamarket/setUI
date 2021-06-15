import { VFC, createElement } from 'react'
import cn from 'classnames'
import { AspectRatio, BorderRadius } from 'CSS'
import {
  ButtonSize,
  sizeResolve,
  ButtonTheme,
  themeResolve,
  ButtonVariant,
  variantResolve,
} from '../../../css'
import { Props } from './types'
import { ClassName } from './styles.css'
import { useSize } from '../../context/group'

const Button: VFC<Props> = ({
  aspectRatio,
  borderRadius,
  disabled,
  className,
  children,
  ...rest
}) => {
  const { size, theme, variant } = useSize()

  return createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,
        size ? ButtonSize[size] : sizeResolve<Partial<Props>>(rest),
        theme ? ButtonTheme[theme] : themeResolve<Partial<Props>>(rest),
        variant ? ButtonVariant[variant] : variantResolve<Partial<Props>>(rest),
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
