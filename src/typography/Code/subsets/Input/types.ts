import type { Props as ParentProps } from '../../Component'

export type { PropsRequired } from '../../Component'

export type Props = Omit<ParentProps, 'as' | 'display' | 'type'>
