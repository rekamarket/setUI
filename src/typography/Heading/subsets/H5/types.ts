import type { Props as ParentProps } from '../../Set'

export type { PropsRequired, PaddingType } from '../../Set'

export type Props = Omit<ParentProps, 'level'>
