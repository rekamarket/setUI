import { FC, createElement } from 'react'
import cn from 'classnames'
import { ButtonTheme, ButtonSize, ButtonVariant } from 'theme'
import { Props } from './types'
import { ClassName } from './styles.css'

const Button: FC<Props> = ({
  onClick,
  size,
  theme,
  variant,
  disabled,
  type = 'button',
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
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
