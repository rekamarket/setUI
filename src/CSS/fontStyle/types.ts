import type { Type } from './styles.css'

interface Italic {
  readonly italic?: boolean
}

interface Oblique {
  readonly oblique?: boolean
}

export type FontStyleProps =
  | Italic
  | Oblique
  | {
      style?: Type
    }
