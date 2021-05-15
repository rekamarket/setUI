import { DialogProps } from 'rc-dialog'
import type { ColorType, ModalWidthType } from 'theme'

export type Props = DialogProps & {
  size?: ModalWidthType
  accent?: ColorType
}
