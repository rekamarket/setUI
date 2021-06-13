import type { Type } from './styles.css'

export type FontWeightProps =
  | {
      thin?: boolean
    }
  | {
      extraLight?: boolean
    }
  | {
      light?: boolean
    }
  | {
      regular?: boolean
    }
  | {
      medium?: boolean
    }
  | {
      semiBold?: boolean
    }
  | {
      bold?: boolean
    }
  | {
      extraBold?: boolean
    }
  | {
      heavy?: boolean
    }
  | {
      lighter?: boolean
    }
  | {
      bolder?: boolean
    }
  | {
      weight?: Type
    }
