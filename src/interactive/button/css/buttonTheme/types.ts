import type { Type } from './styles.css'

interface Primary {
  readonly primary?: boolean
}

interface Secondary {
  readonly secondary?: boolean
}

interface White {
  readonly white?: boolean
}

interface Black {
  readonly black?: boolean
}

export type ThemeProps =
  | Primary
  | Secondary
  | White
  | Black
  | {
      theme?: Type
    }
