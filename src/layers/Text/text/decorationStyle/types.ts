import type { Type } from './styles.css'

interface Solid {
  readonly solid?: boolean
}

interface Double {
  readonly double?: boolean
}

interface Dotted {
  readonly dotted?: boolean
}

interface Dashed {
  readonly dashed?: boolean
}

interface Wavy {
  readonly wavy?: boolean
}

export type TextDecorationStyleProps =
  | Solid
  | Double
  | Dotted
  | Dashed
  | Wavy
  | {
      textDecorationStyle?: Type
    }
