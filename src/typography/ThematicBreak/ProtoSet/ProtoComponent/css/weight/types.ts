import type { Type } from './styles.css'

interface Thin {
  readonly thin?: boolean
}
interface Light {
  readonly light?: boolean
}
interface Medium {
  readonly medium?: boolean
}
interface Bold {
  readonly bold?: boolean
}

export type WeightProps =
  | Thin
  | Light
  | Medium
  | Bold
  | {
      weight?: Type
    }