import type {
  InteractableThemeType,
  InteractableSizeType,
  InteractableVariantType,
} from '../../theme'

export type Props = {
  onClick: () => void
  theme?: InteractableThemeType
  size?: InteractableSizeType
  variant?: InteractableVariantType
  disabled?: boolean
}
