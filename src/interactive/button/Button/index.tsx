import { FC, createElement } from 'react'
import cn from 'classnames'
import { ButtonTheme, ButtonSize, ButtonVariant } from '../css'
import { Props, PropsWithoutTheme, PropsWithoutThemeAndSize } from './types'
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

/*
  Primary
*/
export const ButtonPrimary: FC<PropsWithoutTheme> = (props) => Button({
  theme: 'primary',
  ...props
});

// Primary sizes:
export const ButtonPrimaryXS: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'primary',
  size: 'xsmall',
  ...props
});

export const ButtonPrimaryS: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'primary',
  size: 'small',
  ...props
});

export const ButtonPrimaryM: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'primary',
  size: 'medium',
  ...props
});

export const ButtonPrimaryL: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'primary',
  size: 'large',
  ...props
});

export const ButtonPrimaryXL: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'primary',
  size: 'xlarge',
  ...props
});

/*
  Secondary
*/
export const ButtonSecondary: FC<PropsWithoutTheme> = (props) => Button({
  theme: 'secondary',
  ...props
});

// Secondary sizes
export const ButtonSecondaryXS: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'secondary',
  size: 'xsmall',
  ...props
});

export const ButtonSecondaryS: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'secondary',
  size: 'small',
  ...props
});

export const ButtonSecondaryM: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'secondary',
  size: 'medium',
  ...props
});

export const ButtonSecondaryL: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'secondary',
  size: 'large',
  ...props
});

export const ButtonSecondaryXL: FC<PropsWithoutThemeAndSize> = (props) => Button({
  theme: 'secondary',
  size: 'xlarge',
  ...props
});

export default Button
