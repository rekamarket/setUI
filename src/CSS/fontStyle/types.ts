import type { Type } from './styles.css'

export type FontStyleProps =
  | {
      italic?: boolean
    }
  | {
      oblique?: boolean
    }
  | {
      fontStyle?: Type
    }
