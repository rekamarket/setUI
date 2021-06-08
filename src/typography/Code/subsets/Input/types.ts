import type { PropsRequired as ParentProps } from '../../Component'

export type { PaddingType } from '../../Component/types'

export type Props = Omit<ParentProps, 'as' | 'display' | 'type'>
