import type { AxisProps, ColorProps, OffsetProps, WeightProps } from './css'

type BasicProps = {
  className?: string
}

export type StyleProps = AxisProps & ColorProps & OffsetProps & WeightProps

export type Props = BasicProps & Required<StyleProps>
