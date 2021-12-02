import type {
  IFlexLayer,
  IBackgroundLayer,
  IBorderLayer,
  IContentLayer,
  ICornerLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export type AsType = 'main' | 'section' | 'div'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export interface Props
  extends IFlexLayer,
    IBackgroundLayer,
    IBorderLayer,
    IContentLayer,
    ICornerLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    ITextDecorationLayer,
    IFontLayer,
    ITextTransformLayer {
  as: AsType
  image: string
  className?: string
  children?: ReactNode
}
