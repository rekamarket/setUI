import type { TextTransformProps } from 'layers/Text/text'
import type { ButtonLayerProps } from 'layers'

type BasicProps = {
  href: string
  title?: string
  className?: string
  children: any
}
export type StyleProps = ButtonLayerProps

export type Props = BasicProps & StyleProps
