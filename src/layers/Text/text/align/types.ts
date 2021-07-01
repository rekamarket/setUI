import type { Type } from './styles.css'

interface Start {
  readonly start?: boolean
}

interface Center {
  readonly center?: boolean
}

interface End {
  readonly end?: boolean
}

interface Left {
  readonly left?: boolean
}

interface Right {
  readonly right?: boolean
}

interface Justify {
  readonly justify?: boolean
}

export type TextAlignProps =
  | Start
  | Center
  | End
  | Left
  | Right
  | Justify
  | {
      textAlign?: Type
    }
