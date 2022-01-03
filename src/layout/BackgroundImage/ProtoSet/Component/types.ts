import type {
  IFlexLayer,
  IBackgroundLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
} from 'layers'

export type AsType = 'main' | 'section' | 'div'

export interface Props
  extends Basic,
    IFlexLayer,
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
