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

export type BackgroundColorProps =
  | Primary
  | Secondary
  | Black
  | White
  | {
      backgroundColor?: Type
    }
