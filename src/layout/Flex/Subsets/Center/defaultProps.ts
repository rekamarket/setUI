import type { Props as ParentProps } from '../../ProtoSet'

export const defaultProps: Pick<
  ParentProps,
  | 'alignItems'
  | 'flexDirection'
  | 'alignContent'
  | 'flexWrap'
  | 'justifyContent'
> = {
  alignItems: 'stretch',
  flexDirection: 'row',
  alignContent: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'center',
}
