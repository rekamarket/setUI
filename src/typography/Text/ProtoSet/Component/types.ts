import type { IFontLayer, IColorLayer } from 'layers'

export type Tag =
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

export type NodeProps = Omit<
  React.HTMLProps<HTMLElement>,
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type Props = IFontLayer &
  IColorLayer & {
    tag: Tag
    className?: string
    title?: string
    children: ReactNode
  }
