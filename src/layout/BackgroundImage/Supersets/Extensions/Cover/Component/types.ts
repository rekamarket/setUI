import type { Props as ParentProps } from '../../../../ProtoSet'

export type Props = Omit<
  ParentProps,
  | 'as'
  | 'backgroundAttachment'
  | 'backgroundSize'
  | 'alignItems'
  | 'justifyContent'
>
