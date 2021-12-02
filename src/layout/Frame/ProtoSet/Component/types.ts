import type {
  IMaxInlineSizeByCharactersLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
} from 'layers'

export type AsType = 'div' | 'section'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

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
