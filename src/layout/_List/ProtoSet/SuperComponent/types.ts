import type {
  DividerColorProps,
  DividerOffsetProps,
  DividerWeightProps,
} from '../css'

import type { Props as ComponentProps } from '../Component'

export type Props = ComponentProps &
  DividerColorProps &
  DividerOffsetProps &
  DividerWeightProps
