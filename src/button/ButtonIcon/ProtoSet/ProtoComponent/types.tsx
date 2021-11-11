import type { TextTransformProps } from 'layers/Text/text'
import type { ButtonLayerProps } from 'layers'

interface CustomClickHandler {
  readonly onClick: () => void
}

interface FormClickHandler {
  readonly type: 'reset' | 'submit'
}

type ClickHandler = CustomClickHandler | FormClickHandler

type BasicProps = {
  className?: string
  title: string
  disabled?: boolean
  children: any
} & ClickHandler

export type StyleProps = ButtonLayerProps

export type Props = BasicProps & StyleProps
