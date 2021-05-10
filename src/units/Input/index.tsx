import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles'
import { InputTheme, InputSize, InputVariant } from '../../theme'

const Input: FC<Props> = ({
  size,
  theme,
  variant,
  disabled,
  children,
  ...rest
}) => {
  return (
    <input
      className={cn([
        ClassName,
        InputTheme[theme] || InputTheme.default,
        InputSize[size] || InputSize.default,
        InputVariant[variant] || InputVariant.default,
      ])}
      disabled={disabled}
      {...rest}
    />
  )
}

export default Input
