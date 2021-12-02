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
  href: string
  className?: string
  title?: string
  children: string
}
