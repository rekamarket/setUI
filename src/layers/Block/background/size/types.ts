import type { Type } from './styles.css'

interface Cover {
  readonly cover?: boolean
}

interface Contain {
  readonly contain?: boolean
}

export type BackgroundSizeProps =
  | Cover
  | Contain
  | {
      backgroundSize?: Type
    }
