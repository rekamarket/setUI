import type {
  RadiusProps,
  ShapeProps,
  SizeProps,
  ThemeProps,
  VariantProps,
} from './css'

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
} & ClickHandler

export type StyleProps = RadiusProps &
  ShapeProps &
  SizeProps &
  ThemeProps &
  VariantProps

export type Props = BasicProps & Required<StyleProps>
