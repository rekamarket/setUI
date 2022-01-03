import type {
  IFlexLayer,
  IMarkerLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
} from 'layers'
// import { ListProps } from './layers'

export type AsType = 'ul' | 'ol' | 'menu'

export interface Props
  extends IFlexLayer,
    IMarkerLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer {
  as: AsType
  value?: string
  className?: string
  children: ReactNode
}
