import type {
  ICharsPerLineLayer,
  IContentLayer,
  IMarginLayer,
  IPaddingLayer,
  IColorLayer,
  IFontLayer,
  ITextTransformLayer,
} from 'layers'
import { Div } from 'HTML'

export const LevelKeys = [1, 2, 3, 4, 5, 6]
export type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export type NodeProps = Omit<
  React.HTMLProps<HTMLHeadingElement>,
  'color' | 'size'
>

export type AsKeys = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', Div.Tag]
export type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | Div.Tag

export interface Props
  extends ICharsPerLineLayer,
    IContentLayer,
    IMarginLayer,
    IPaddingLayer,
    IColorLayer,
    IFontLayer,
    ITextTransformLayer {
  OVERRIDE_TAG_SEMANTICS: boolean
  level: LevelType
  className?: string
  title?: string
  children: ReactNode
}
