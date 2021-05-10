import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles'
import {
  InteractableTheme,
  InteractableSize,
  InteractableVariant,
} from '../../theme'

const Button: FC<Props> = ({
  onClick,
  size,
  theme,
  variant,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cn([
        ClassName,
        InteractableTheme[theme] || InteractableTheme.default,
        InteractableSize[size] || InteractableSize.default,
        InteractableVariant[variant] || InteractableVariant.default,
      ])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
