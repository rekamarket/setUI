import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles'
import { ButtonTheme, ButtonSize, ButtonVariant } from '../../theme'

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
        ButtonTheme[theme] || ButtonTheme.default,
        ButtonSize[size] || ButtonSize.default,
        ButtonVariant[variant] || ButtonVariant.default,
      ])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
