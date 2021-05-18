import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Values = ['left', 'center', 'right']
const VALUES = tuple(...Values)
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

const Styles = mapToStyles(map, (value: any) => value)

export const Direction: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['left' as Type],
}
