import type { Type } from './styles.css'

interface Primary {
  readonly primary?: boolean
}

interface Secondary {
  readonly secondary?: boolean
}

interface Critical {
  readonly critical?: boolean
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
  | Critical
  | White
  | Black
  | {
      theme?: Type
    }
