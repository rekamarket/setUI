import { styleVariants } from '@vanilla-extract/css'
import { map } from '../styles.css'
import type { Type } from '../styles.css'

const Style = styleVariants(map, (value) => ({
  paddingInlineStart: value,
}))

export const Styles: typeof Style & {
  default: string
} = {
  ...Style,
  default: Style['none' as Type],
}
