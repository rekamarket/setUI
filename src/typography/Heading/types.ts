import type { Props as ParentProps, NodeProps } from './ProtoSet'

export type { Props, NodeProps, Semantics } from './ProtoSet'

export type NonSemantic = Partial<Omit<ParentProps, 'tag' | 'level'>> &
  NodeProps // Props - Semantic

export type NonRepresentation = Pick<
  NonSemantic,
  'children' | 'className' | 'title'
> &
  NodeProps

export type PureRepresentation = Omit<
  ParentProps,
  'tag' | 'level' | 'children' | 'className' | 'title'
>

export type MinimumRepresentation = Partial<
  Pick<
    PureRepresentation,
    | 'color'
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
    | 'charsPerLine'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'contentAlign'
  >
>
