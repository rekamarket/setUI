import type { AspectRatioType, BorderRadiusType } from 'CSS'
import type { SizeProps, ThemeProps, VariantProps } from '../../../css'

interface CustomClickHandler {
  readonly onClick: () => void
}

interface FormClickHandler {
  readonly type: 'reset' | 'submit'
}

type ClickHandler = CustomClickHandler | FormClickHandler

type BasicProps = {
  className?: string
  title?: string
  disabled?: boolean
  children: any
  aspectRatio?: AspectRatioType
  borderRadius?: BorderRadiusType
} & ClickHandler

type StyleProps = SizeProps & ThemeProps & VariantProps

export type Props = BasicProps & StyleProps
export type PropsRequired = BasicProps & Required<StyleProps>
