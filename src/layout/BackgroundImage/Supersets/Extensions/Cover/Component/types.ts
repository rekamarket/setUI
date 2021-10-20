import type { Props as ParentProps } from '../../../../ProtoSet'
import { ShadowProps } from './layers'

export type Props = Omit<
  ParentProps,
  | 'as'
  | 'backgroundAttachment'
  | 'backgroundSize'
  | 'alignItems'
  | 'justifyContent'
> &
  ShadowProps
