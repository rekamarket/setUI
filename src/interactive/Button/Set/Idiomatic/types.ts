import type { Props as ParentProps, NodeProps } from '../../ProtoSet'

export type Props = NodeProps &
  Pick<ParentProps, 'children'> &
  Partial<
    Pick<ParentProps, 'className' | 'color' | 'size' | 'variant' | 'loading'>
  >
