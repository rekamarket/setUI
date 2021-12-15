import type {
  IFlexLayer,
  IBackgroundLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
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
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer {
  as: AsType
  image: string
  className?: string
  children?: ReactNode
}
