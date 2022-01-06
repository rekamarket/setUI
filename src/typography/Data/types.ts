import type { Props as ParentProps, NodeProps } from './ProtoSet'

export type { Props, NodeProps } from './ProtoSet'

export type NonSemantic = Partial<ParentProps> & NodeProps // Props - Semantic

export type NonRepresentation = Pick<
  NonSemantic,
  'children' | 'className' | 'title' | 'value'
> &
  NodeProps

export type PureRepresentation = Omit<
  ParentProps,
  'children' | 'className' | 'title' | 'value'
>

export type MinimumRepresentation = Partial<
  Pick<PureRepresentation, 'color' | 'fontFamily' | 'fontSize' | 'fontWeight'>
>
