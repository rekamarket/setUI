import { DialogProps } from 'rc-dialog'
import type { ColorType } from 'CSS'
import type { ModalWidthType } from '../css'

export type Props = DialogProps & {
  size?: ModalWidthType
  accent?: ColorType
}
