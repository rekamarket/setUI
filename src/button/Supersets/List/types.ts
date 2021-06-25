import type { StyleProps } from '../../ProtoSet'

import type { Props as ListProps } from 'layout/List'

export type Props = {
  children: any
} & StyleProps &
  ListProps
