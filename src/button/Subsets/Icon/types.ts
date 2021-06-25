import type { Props as ParentProps } from '../../ProtoSet'

export type { DefaultStyleProps } from '../../ProtoSet'

export type Props = Omit<ParentProps, 'shape'>
