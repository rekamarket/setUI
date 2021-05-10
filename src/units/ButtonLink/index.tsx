import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles'
import { ButtonTheme, ButtonSize, ButtonVariant } from '../../theme'

const ButtonLink: FC<Props> = ({
  href,
  size,
  theme,
  variant,
  children,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={cn([
        ClassName,
        ButtonTheme[theme] || ButtonTheme.default,
        ButtonSize[size] || ButtonSize.default,
        ButtonVariant[variant] || ButtonVariant.default,
      ])}
      {...rest}
    >
      {children}
    </a>
  )
}

export default ButtonLink
