import type {
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLDataElement>,
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type Props = IColorLayer &
  ITextDecorationLayer &
  IFontLayer &
  ITextTransformLayer & {
    className?: string
    value: string
    title?: string
    children: ReactNode
  }
