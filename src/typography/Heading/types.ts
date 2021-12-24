import type { Props as ParentProps } from './ProtoSet'

export type { Props } from './ProtoSet'
export type NonSemantic = Omit<ParentProps, 'level'>

export type NonRepresentation = Pick<
  ParentProps,
  'level' | 'children' | 'className'
>
export type PureRepresentation = Omit<
  ParentProps,
  'level' | 'children' | 'className'
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
