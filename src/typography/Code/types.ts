import type { Props as ParentProps, NodeProps } from './ProtoSet'

export type { Props, NodeProps, Tag } from './ProtoSet'

export type NonSemantic = Partial<Omit<ParentProps, 'tag'>> & NodeProps // Props - Semantic

export type NonRepresentation = Pick<
  NonSemantic,
  'children' | 'className' | 'title'
> &
  NodeProps

export type PureRepresentation = Omit<
  ParentProps,
  'tag' | 'children' | 'className' | 'title'
>

export type MinimumRepresentation = Partial<
  Pick<PureRepresentation, 'color' | 'fontFamily' | 'fontSize' | 'fontWeight'>
>
