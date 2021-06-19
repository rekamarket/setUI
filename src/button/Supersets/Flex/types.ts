import type {
  RadiusProps,
  SizeProps,
  ThemeProps,
  VariantProps,
} from '../../ProtoSet/css'
import type { Props as FlexProps } from 'layout/Flex'

export type Props = {
  children: any
} & RadiusProps &
  SizeProps &
  ThemeProps &
  VariantProps &
  FlexProps
