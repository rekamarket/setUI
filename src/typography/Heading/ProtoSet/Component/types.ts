import type {
  ICharsPerLineLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
  ITextTransformLayer,
  ITextOverflowLayer,
} from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLHeadingElement>,
  'color' | 'size'
>

export type LevelType = 1 | 2 | 3 | 4 | 5 | 6
export type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'

export interface Props
  extends ICharsPerLineLayer,
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer,
    ITextTransformLayer,
    ITextOverflowLayer {
  OVERRIDE_TAG_SEMANTICS: boolean
  level: LevelType
  className?: string
  title?: string
  children: ReactNode
}
