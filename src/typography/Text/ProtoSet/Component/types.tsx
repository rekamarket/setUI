import type { BlockLayerProps, TextLayerProps } from 'layers'

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

export type Props = BasicProps & BlockLayerProps & TextLayerProps
export type PropsRequired = BasicProps &
  Required<BlockLayerProps> &
  Required<TextLayerProps>
