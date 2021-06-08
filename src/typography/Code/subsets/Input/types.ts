import type { Props as ParentProps } from '../../Component'

export type { PropsRequired, PaddingType } from '../../Component'

export type Props = Omit<ParentProps, 'as' | 'display' | 'type'>
