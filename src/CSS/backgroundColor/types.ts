import type { Type } from './styles.css'

interface Primary {
  readonly primary?: boolean
}

interface Secondary {
  readonly secondary?: boolean
}

interface Black {
  readonly black?: boolean
}

interface White {
  readonly white?: boolean
}

export type BackgroundProps =
  | Primary
  | Secondary
  | Black
  | White
  | {
      background?: Type
    }
