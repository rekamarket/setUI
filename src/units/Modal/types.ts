import { DialogProps } from 'rc-dialog'
import type { ColorType, WidthModalType } from '../../theme'

export type Props = DialogProps & {
  size?: WidthModalType
  accent?: ColorType
}
