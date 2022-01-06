import type {
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLTimeElement>,
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type Props = IColorLayer &
  ITextDecorationLayer &
  IFontLayer &
  ITextTransformLayer & {
    className?: string
    datetime: string
    title?: string
    children: ReactNode
  }
