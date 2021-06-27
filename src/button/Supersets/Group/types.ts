import type { StyleProps } from '../../ProtoSet'
import type { Props as FlexProps } from 'layout/Flex'

export type Props = {
  children: any
} & StyleProps &
  Omit<FlexProps, 'gap'>
