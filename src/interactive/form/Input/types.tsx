import type { InputThemeType, InputSizeType, InputVariantType } from '../css'

export type Props = {
  style?: React.CSSProperties
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  multiple?: boolean
  theme?: InputThemeType
  size?: InputSizeType
  variant?: InputVariantType
  disabled?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: any
}
