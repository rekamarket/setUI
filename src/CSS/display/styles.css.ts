import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  /* legacy values */
  'block',
  'inline',
  'inline',
  'flex',
  'inline',
  'grid',
  'inline',
  'flow',

  /* box generation */
  'none',
  'contents',

  /* two-value syntax */
  'block_flow',
  'inline_flow',
  'inline_flowRoot',
  'block_flex',
  'inline_flex',
  'block_grid',
  'inline_grid',
  'block_flowRoot',

  /* other values */
  'table',
  'table',
  'list',

  /* Global values */
  'inherit',
  'initial',
  'unset',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  /* legacy values */
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  flex: 'flex',
  inlineFlex: 'inline-flex',
  grid: 'grid',
  inlineGrid: 'inline-grid',
  flowRoot: 'flow-root',

  /* box generation */
  none: 'none',
  contents: 'contents',

  /* two-value syntax */
  block_flow: 'block flow',
  inline_flow: 'inline flow',
  inline_flowRoot: 'inline flow-root',
  block_flex: 'block flex',
  inline_flex: 'inline flex',
  block_grid: 'block grid',
  inline_grid: 'inline grid',
  block_flowRoot: 'block flow-root',

  /* other values */
  table: 'table',
  tableRow: 'table-row',
  listItem: 'list-item',

  /* Global values */
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
}

const Styles = styleVariants(map, (value: any) => ({
  display: value,
}))

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['block' as Type],
}
