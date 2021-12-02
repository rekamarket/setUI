import type { Props as ParentProps } from '../../ProtoSet'

export type Props = Omit<
  ParentProps,
  | 'alignItems'
  | 'flexDirection'
  | 'alignContent'
  | 'flexWrap'
  | 'justifyContent'
>
