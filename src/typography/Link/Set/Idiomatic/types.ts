import type { Props as ParentProps } from '../../ProtoSet/Component/types'

export type Props = Pick<ParentProps, 'children' | 'href'> &
  Partial<Pick<ParentProps, 'className' | 'color' | 'fontSize' | 'fontWeight'>>
