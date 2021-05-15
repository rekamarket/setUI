import type {
  ButtonThemeType,
  ButtonSizeType,
  ButtonVariantType,
} from 'theme'

export type Props = {
  onClick?: () => void
  theme?: ButtonThemeType
  size?: ButtonSizeType
  variant?: ButtonVariantType
  disabled?: boolean
  type?: 'reset' | 'button' | 'submit'
}
