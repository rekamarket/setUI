import type { Type } from './styles.css'

export type TextTransformProps =
  | {
      uppercase?: boolean
    }
  | {
      lowercase?: boolean
    }
  | {
      capitalize?: boolean
    }
  | {
      transform?: Type
    }
