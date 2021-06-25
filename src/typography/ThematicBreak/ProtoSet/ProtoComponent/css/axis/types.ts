import type { Type } from './styles.css'

interface Vertical {
  readonly vertical?: boolean
}

interface Horizontal {
  readonly horizontal?: boolean
}

export type AxisProps =
  | Vertical
  | Horizontal
  | {
      axis?: Type
    }
