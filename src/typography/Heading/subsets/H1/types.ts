import type { Props as ParentProps } from '../../Component/Heading'

export type { PropsRequired, PaddingType } from '../../Component/Heading'

export type Props = Omit<ParentProps, 'level'>
