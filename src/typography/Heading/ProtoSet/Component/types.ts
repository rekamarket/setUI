import type {
  ICharsPerLineLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'

export const LevelKeys = [1, 2, 3, 4, 5, 6]
export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

export interface Props
  extends ICharsPerLineLayer,
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer,
    ITextTransformLayer {
  level: LevelType
  className?: string
  title?: string
  children: string
}
