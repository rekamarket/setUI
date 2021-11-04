import type { Type } from './styles.css'

interface Rect {
  readonly rect?: boolean
}

interface Square {
  readonly square?: boolean
}

export type ShapeProps =
  | Rect
  | Square
  | {
      shape?: Type
    }
