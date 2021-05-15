import { DialogProps } from 'rc-dialog'
import type { ColorType, ModalWidthType } from 'CSS'

export type Props = DialogProps & {
  size?: ModalWidthType
  accent?: ColorType
}
