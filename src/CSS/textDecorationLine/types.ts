import type { Type } from './styles.css'

export type TextDecorationLineProps =
  | {
      overline?: boolean
      lineThrough?: boolean
      underline?: boolean
    }
  | {
      decorationLine?: Type
    }
