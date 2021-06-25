import type {
  ColorProps,
  DirectionProps,
  OffsetProps,
  WeightProps,
} from '../css'

type BasicProps = {
  className?: string
}

export type StyleProps = ColorProps & DirectionProps & OffsetProps & WeightProps

export type Props = BasicProps & Required<StyleProps>
