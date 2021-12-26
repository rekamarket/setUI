import type { Props as ParentProps } from './ProtoSet'

export type { Props } from './ProtoSet'

export type Semantic = Pick<ParentProps, 'level' | 'OVERRIDE_TAG_SEMANTICS'>
export type NonSemantic = Omit<ParentProps, 'level' | 'OVERRIDE_TAG_SEMANTICS'> // Props - Semantic
export type NonRepresentation = Pick<
  NonSemantic,
  'children' | 'className' | 'title'
>

export type PureRepresentation = Omit<
  ParentProps,
  'OVERRIDE_TAG_SEMANTICS' | 'level' | 'children' | 'className' | 'title'
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
    | 'contentAlign'
  >
>
