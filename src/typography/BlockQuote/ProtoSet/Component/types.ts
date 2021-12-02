import type {
  IQuoteLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
} from 'layers'

export type AsType = 'blockquote' | 'p' | 'div'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

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
