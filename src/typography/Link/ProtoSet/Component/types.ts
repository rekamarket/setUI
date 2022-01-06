import type {
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type Props = IColorLayer &
  ITextDecorationLayer &
  IFontLayer &
  ITextTransformLayer & {
    href: string
    className?: string
    title?: string
    children: ReactNode
  }
