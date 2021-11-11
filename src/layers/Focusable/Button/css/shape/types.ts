import type { Type } from './styles.css'

interface Rect {
  readonly rect?: boolean
}

interface Square {
  readonly square?: boolean
}
interface Fit {
  readonly fit?: boolean
}

export type ShapeProps =
  | Rect
  | Square
  | Fit
  | {
      shape?: Type
    }
