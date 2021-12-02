import type { IFontLayer, IColorLayer } from 'layers'

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

export interface Props extends IFontLayer, IColorLayer {
  as: AsType
  className?: string
  title?: string
  children: string
}
