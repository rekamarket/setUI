import type {
  ButtonThemeType,
  ButtonSizeType,
  ButtonVariantType,
} from '../css'

export type Props = {
  onClick?: () => void
  theme?: ButtonThemeType
  size?: ButtonSizeType
  variant?: ButtonVariantType
  disabled?: boolean
  type?: 'reset' | 'button' | 'submit'
}

export type PropsWithoutTheme = Omit<Props, 'theme'>;
export type PropsWithoutThemeAndSize = Omit<Props, 'theme' | 'size'>;
