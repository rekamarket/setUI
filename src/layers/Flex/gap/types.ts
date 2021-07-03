import type { Type } from './styles.css'

interface Xsmall {
  readonly xsmall?: boolean
}

interface XS {
  readonly xs?: boolean
}

interface Small {
  readonly small?: boolean
}

interface S {
  readonly s?: boolean
}

interface Medium {
  readonly medium?: boolean
}

interface M {
  readonly m?: boolean
}

interface Large {
  readonly large?: boolean
}

interface L {
  readonly l?: boolean
}

interface Xlarge {
  readonly xlarge?: boolean
}

interface XL {
  readonly xl?: boolean
}

export type GapProps =
  | Xsmall
  | XS
  | Small
  | S
  | Medium
  | M
  | Large
  | L
  | Xlarge
  | XL
  | {
      gap?: Type
    }
