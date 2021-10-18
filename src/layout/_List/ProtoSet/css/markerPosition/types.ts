import type { Type } from './styles.css'

interface Inside {
  readonly inside?: boolean
}

interface Outside {
  readonly outside?: boolean
}

export type MarkerPositionProps =
  | Inside
  | Outside
  | {
      markerPosition?: Type
    }
