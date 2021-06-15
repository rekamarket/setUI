import type { Type } from './styles.css'

interface Solid {
  readonly solid?: boolean
}
interface Ghost {
  readonly ghost?: boolean
}
interface Soft {
  readonly soft?: boolean
}
interface Text {
  readonly text?: boolean
}

export type VariantProps =
  | Solid
  | Ghost
  | Soft
  | Text
  | {
      variant?: Type
    }
