import type { Props as ParentProps } from './ProtoSet'

export type { Props } from './ProtoSet'
export type NonSemantic = Omit<ParentProps, 'level'>

export type NonRepresentation = Pick<
  ParentProps,
  'OVERRIDE_TAG_SEMANTICS' | 'level' | 'children' | 'className' | 'title'
>
export type PureRepresentation = Omit<
  ParentProps,
  'OVERRIDE_TAG_SEMANTICS' | 'level' | 'children' | 'className' | 'title'
>

export type MinimumRepresentation = Partial<
  Pick<
    ParentProps,
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
