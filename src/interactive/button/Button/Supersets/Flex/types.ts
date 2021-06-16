import type {
  RadiusProps,
  SizeProps,
  ThemeProps,
  VariantProps,
} from '../../../css'
import type { Props as FlexProps } from 'layout/Flex'

export type Props = {
  children: any
} & RadiusProps &
  SizeProps &
  ThemeProps &
  VariantProps &
  FlexProps
