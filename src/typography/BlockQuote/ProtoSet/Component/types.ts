import type {
  IQuoteLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
} from 'layers'

export type AsType = 'blockquote' | 'p' | 'div'

export interface Props
  extends IQuoteLayer,
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer {
  as: AsType
  className?: string
  children: ReactNode
}
