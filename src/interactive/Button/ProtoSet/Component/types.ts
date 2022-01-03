import type { Props as HostProps } from '../HostComponent'

export interface Props
  extends Omit<HostProps, 'slotStart' | 'slotMiddle' | 'slotEnd'> {
  loading?: boolean
  loadingNode?: ReactNode
  iconNode?: ReactNode
  iconPosition?: 'start' | 'end'
}
