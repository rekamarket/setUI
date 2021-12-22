import type { Props as HostProps } from '../HostComponent'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export interface Props
  extends Omit<HostProps, 'slotStart' | 'slotMiddle' | 'slotEnd'> {
  loading?: boolean
  loadingNode?: ReactNode
}
