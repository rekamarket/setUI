import { FormProps } from 'rc-field-form'
import { FieldProps } from 'rc-field-form/lib/Field'
import type { InputSizeType } from '../../theme'

export type Props = FormProps

export type PropsField = FieldProps & {
  name: string
  label?: string | React.ReactChild
  labelIcon?: React.ReactChild
  size?: InputSizeType
  noStyle?: boolean
}
