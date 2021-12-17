import type { IButtonLinkLayer, IMarginLayer } from 'layers'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export type NodeProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'color' | 'size'
>

export interface Props extends NodeProps, IButtonLinkLayer, IMarginLayer {
  className?: string
  children: ReactNode
}
