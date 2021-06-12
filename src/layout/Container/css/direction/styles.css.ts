import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['left', 'center', 'right']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  left: {
    marginRight: 'auto',
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  right: {
    marginLeft: 'auto',
  },
}

const Styles = styleVariants(map, (value: any) => value)

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['left' as Type],
}
