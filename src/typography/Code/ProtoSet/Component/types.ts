import type { IFontLayer, IColorLayer } from 'layers'

export type Tag = 'var' | 'samp' | 'kbd' | 'code'

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
