import type {
  ButtonThemeType,
  ButtonSizeType,
  ButtonVariantType,
} from 'CSS'

export type Props = {
  onClick?: () => void
  theme?: ButtonThemeType
  size?: ButtonSizeType
  variant?: ButtonVariantType
  disabled?: boolean
  type?: 'reset' | 'button' | 'submit'
}
