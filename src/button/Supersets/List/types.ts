import type {
  RadiusProps,
  SizeProps,
  ThemeProps,
  VariantProps,
} from '../../ProtoSet/css'

import type { Props as ListProps } from 'layout/List'

export type Props = {
  children: any
} & RadiusProps &
  SizeProps &
  ThemeProps &
  VariantProps &
  ListProps
