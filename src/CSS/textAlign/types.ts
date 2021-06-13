import type { Type } from './styles.css'

export type TextAlignProps =
  | {
      start?: boolean
    }
  | {
      center?: boolean
    }
  | {
      end?: boolean
    }
  | {
      left?: boolean
    }
  | {
      right?: boolean
    }
  | {
      justify?: boolean
    }
  | {
      align?: Type
    }
