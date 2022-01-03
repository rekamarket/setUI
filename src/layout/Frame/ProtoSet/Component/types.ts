import type {
  IMaxInlineSizeByCharactersLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
} from 'layers'

export type AsType = 'div' | 'section'

export interface Props
  extends IMaxInlineSizeByCharactersLayer,
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer {
  as: AsType
  className?: string
  children: ReactNode
}
