import type { Type } from './styles.css'

interface Pill {
  readonly pill?: boolean
}

interface Circle {
  readonly circle?: boolean
}

export type RadiusProps =
  | Pill
  | Circle
  | {
      radius?: Type
    }
