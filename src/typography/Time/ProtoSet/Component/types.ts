import type {
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export interface Props
  extends IColorLayer,
    ITextDecorationLayer,
    IFontLayer,
    ITextTransformLayer {
  className?: string
  datetime: string
  title?: string
  children: string
}
