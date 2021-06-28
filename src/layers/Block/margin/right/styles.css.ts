import { styleVariants } from '@vanilla-extract/css'
import { map } from '../styles.css'
import type { Type } from '../styles.css'

const Style = styleVariants(map, (value) => ({
  marginRight: value,
}))

export const Styles: typeof Style & {
  default: string
} = {
  ...Style,
  default: Style['none' as Type],
}
