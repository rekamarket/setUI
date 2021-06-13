import type { Type } from './styles.css'

interface Thin {
  readonly thin?: boolean
}

interface ExtraLight {
  readonly extraLight?: boolean
}

interface Light {
  readonly light?: boolean
}

interface Regular {
  readonly regular?: boolean
}

interface Medium {
  readonly medium?: boolean
}

interface SemiBold {
  readonly semiBold?: boolean
}

interface Bold {
  readonly bold?: boolean
}

interface ExtraBold {
  readonly extraBold?: boolean
}

interface Heavy {
  readonly heavy?: boolean
}

interface Lighter {
  readonly lighter?: boolean
}

interface Bolder {
  readonly bolder?: boolean
}

export type FontWeightProps =
  | Thin
  | ExtraLight
  | Light
  | Regular
  | Medium
  | SemiBold
  | Bold
  | ExtraBold
  | Heavy
  | Lighter
  | Bolder
  | {
      weight?: Type
    }
