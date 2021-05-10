import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles'
import {
  InteractableTheme,
  InteractableSize,
  InteractableVariant,
} from '../../theme'

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
        InteractableTheme[theme] || InteractableTheme.default,
        InteractableSize[size] || InteractableSize.default,
        InteractableVariant[variant] || InteractableVariant.default,
      ])}
      {...rest}
    >
      {children}
    </a>
  )
}

export default ButtonLink
