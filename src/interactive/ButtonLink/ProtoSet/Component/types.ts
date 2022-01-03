import type { IButtonLinkLayer, IMarginLayer } from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'color' | 'size'
>

export interface Props extends NodeProps, IButtonLinkLayer, IMarginLayer {
  className?: string
  children: ReactNode
}
