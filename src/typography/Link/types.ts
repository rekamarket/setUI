import type { Props as ParentProps, NodeProps } from './ProtoSet'

export type { Props, NodeProps, Semantics } from './ProtoSet'

export type NonSemantic = Partial<ParentProps> & NodeProps // Props - Semantic

export type NonRepresentation = Pick<
  NonSemantic,
  'children' | 'className' | 'title' | 'href'
> &
  NodeProps

export type PureRepresentation = Omit<
  ParentProps,
  'children' | 'className' | 'title' | 'href'
>

export type MinimumRepresentation = Partial<
  Pick<
    PureRepresentation,
    | 'color'
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
  >
>
