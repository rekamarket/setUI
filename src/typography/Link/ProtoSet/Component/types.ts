import type {
  IColorLayer,
  ITextDecorationLayer,
  IFontLayer,
  ITextTransformLayer,
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
  extends IColorLayer,
    ITextDecorationLayer,
    IFontLayer,
    ITextTransformLayer {
  href: string
  className?: string
  title?: string
  children: ReactNode
}
