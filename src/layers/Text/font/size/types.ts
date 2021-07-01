import type { Type } from './styles.css'

interface Xxxsmall {
  readonly xxxsmall?: boolean
}

interface Xxxs {
  readonly xxxs?: boolean
}

interface Xxsmall {
  readonly xxsmall?: boolean
}

interface Xxs {
  readonly xxs?: boolean
}

interface Xsmall {
  readonly xsmall?: boolean
}

interface Xs {
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

interface Xl {
  readonly xl?: boolean
}

interface Xxlarge {
  readonly xxlarge?: boolean
}

interface Xxl {
  readonly xxl?: boolean
}

interface Xxxlarge {
  readonly xxxlarge?: boolean
}

interface Xxxl {
  readonly xxxl?: boolean
}

interface Smaller {
  readonly smaller?: boolean
}

interface Larger {
  readonly larger?: boolean
}

export type FontSizeProps =
  | Xxxsmall
  | Xxxs
  | Xxsmall
  | Xxs
  | Xsmall
  | Xs
  | Small
  | S
  | Medium
  | M
  | Large
  | L
  | Xlarge
  | Xl
  | Xxlarge
  | Xxl
  | Xxxlarge
  | Xxxl
  | Smaller
  | Larger
  | {
      fontSize?: Type
    }
