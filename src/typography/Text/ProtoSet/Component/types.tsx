import type { PaddingType } from 'CSS'
import { TextLayerProps } from 'layers'

export type AsType =
  | 'span'
  | 'strong'
  | 'em'
  | 'i'
  | 'b'
  | 'dfn'
  | 'abbr'
  | 'sup'
  | 'sub'
  | 'mark'
  | 'cite'
  | 'u'
  | 's'
  | 'small'

type BasicProps = {
  as: AsType
  className?: string
  title?: string
}

export type { PaddingType } from 'CSS'
export type Props = BasicProps & TextLayerProps & PaddingType
export type PropsRequired = BasicProps &
  Required<TextLayerProps> &
  Required<PaddingType>
