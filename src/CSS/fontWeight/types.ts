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
      normal?: boolean
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
      fontWeight?: Type
    }
