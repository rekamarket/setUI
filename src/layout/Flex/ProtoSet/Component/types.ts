import type {
  IFlexLayer,
  IBackgroundLayer,
  IBorderLayer,
  IContentLayer,
  ICornerLayer,
  IMarginLayer,
  IPaddingLayer,
} from 'layers'

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
    IPaddingLayer {
  className?: string
  children: ReactNode
}
