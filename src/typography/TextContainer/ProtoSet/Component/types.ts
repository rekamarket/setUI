import type {
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
  ILineClampLayer,
} from 'layers'

export type Tag = 'p' | 'div'

export type NodeProps = Omit<
  React.HTMLProps<HTMLParagraphElement>,
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type Props = IContentLayer &
  IMarginLayer &
  IPaddingLayer &
  IColorLayer &
  IFontLayer &
  ILineClampLayer & {
    tag: Tag
    className?: string
    children: ReactNode
  }
