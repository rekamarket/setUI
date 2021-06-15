import type { Props as GroupContextProps } from '../../context/group'
import type { Props as FlexProps } from 'layout/Flex'

export type Props = {
  children: any
} & GroupContextProps &
  FlexProps
