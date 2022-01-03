import type {
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
  ILineClampLayer,
} from 'layers'

export type AsType = 'p' | 'div'

export interface Props
  extends IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer,
    ILineClampLayer {
  as: AsType
  className?: string
  children: ReactNode
}
