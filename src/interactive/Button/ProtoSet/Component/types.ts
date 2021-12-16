import type { IInteractiveLayer, IMarginLayer } from 'layers'

export type AsType = 'button' | 'div'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export interface Props extends IInteractiveLayer, IMarginLayer {
  as: AsType
  className?: string
  children: ReactNode
}
