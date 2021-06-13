import type { Props as ParentProps } from '../../ProtoSet'

export type { PropsRequired, PaddingType } from '../../ProtoSet'

export type Props = Omit<ParentProps, 'as'>
