import type { Type } from './styles.css'

interface Circle {
  readonly circle?: boolean
}

interface Pill {
  readonly pill?: boolean
}

export type BorderRadiusProps =
  | Circle
  | Pill
  | {
      borderRadius?: Type
    }
