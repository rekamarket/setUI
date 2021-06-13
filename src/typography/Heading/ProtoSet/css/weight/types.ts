import type { Type } from './styles.css'

interface Regular {
  readonly regular?: boolean
}

interface Bold {
  readonly bold?: boolean
}

export type WeightProps =
  | Regular
  | Bold
  | {
      weight?: Type
    }
