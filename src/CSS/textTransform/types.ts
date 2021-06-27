import type { Type } from './styles.css'

interface Uppercase {
  readonly uppercase?: boolean
}

interface Lowercase {
  readonly lowercase?: boolean
}

interface Capitalize {
  readonly capitalize?: boolean
}

export type TextTransformProps =
  | Uppercase
  | Lowercase
  | Capitalize
  | {
      transform?: Type
    }
