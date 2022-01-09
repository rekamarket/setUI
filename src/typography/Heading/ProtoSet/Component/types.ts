import { HTML_semanticallyNeutralTags as SemanticallyNeutralTags } from '../../../../HTML/HTML.gen'
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
  'children' | 'color' | 'size' | 'align' | 'as'
>

export type LevelType = 1 | 2 | 3 | 4 | 5 | 6
export type SemanticCore = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type Semantics = SemanticCore | SemanticallyNeutralTags

export type Props = ICharsPerLineLayer &
  IContentLayer &
  IMarginLayer &
  IPaddingLayer &
  IColorLayer &
  IFontLayer &
  ITextTransformLayer &
  ITextOverflowLayer & {
    tag?: SemanticallyNeutralTags
    level: LevelType
    className?: string
    title?: string
    children: ReactNode
  }
