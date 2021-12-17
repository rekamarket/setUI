import type {
  Props as ParentProps,
  NodeProps,
} from '../../ProtoSet/Component/types'

export type Props = NodeProps &
  Pick<ParentProps, 'children'> &
  Partial<Pick<ParentProps, 'className' | 'color' | 'size' | 'variant'>>
