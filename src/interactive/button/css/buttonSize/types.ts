import type { Type } from './styles.css'

interface Xsmall {
  readonly xsmall?: boolean
}
interface Small {
  readonly small?: boolean
}
interface Medium {
  readonly medium?: boolean
}
interface Large {
  readonly large?: boolean
}
interface Xlarge {
  readonly xlarge?: boolean
}

export type SizeProps =
  | Xsmall
  | Small
  | Medium
  | Large
  | Xlarge
  | {
      size?: Type
    }
