import type {
  IFlexLayer,
  IBackgroundLayer,
  IBorderLayer,
  IContentLayer,
  ICornerLayer,
  IMarginLayer,
  IPaddingLayer,
} from 'layers'

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
