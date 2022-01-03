import type { IButtonLayer, IMarginLayer } from 'layers'

export type NodeProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  'color' | 'size'
>

export interface Props extends NodeProps, IButtonLayer, IMarginLayer {
  className?: string
  children: ReactNode
}
