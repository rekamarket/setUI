import type { Props as ParentProps } from '../../ProtoSet'

export type Props = Pick<ParentProps, 'children' | 'as'> &
  Partial<Pick<ParentProps, 'className' | 'color' | 'fontSize'>>
