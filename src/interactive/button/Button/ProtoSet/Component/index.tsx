import { VFC, createElement } from 'react'
import cn from 'classnames'
import { sizeResolve, themeResolve, variantResolve } from '../../../css'
import { Props } from './types'
import { ClassName } from './styles.css'

const Button: VFC<Props> = ({ disabled, className, children, ...rest }) => {
  return createElement(
    'button',

    {
      className: cn([
        ClassName,
        className,
        sizeResolve<Partial<Props>>(rest),
        themeResolve<Partial<Props>>(rest),
        variantResolve<Partial<Props>>(rest),
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
