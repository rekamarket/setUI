import type { Props as ParentProps, PropsRequired } from '../ProtoSet'

export type { PropsRequired } from '../ProtoSet'

export type Props = Omit<ParentProps, 'level'> & PropsRequired
