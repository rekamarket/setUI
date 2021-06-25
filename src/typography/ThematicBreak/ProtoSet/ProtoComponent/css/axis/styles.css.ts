import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = ['vertical', 'horizontal']
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

type Properties =
  | 'borderTop'
  | 'borderRight'
  | 'borderBottom'
  | 'borderLeft'
  | 'height'
  | 'width'
  | 'backgroundColor'
  | 'backgroundClip'
type Values = string
type Value = {
  [key in Properties]: Values
}

export const map: Record<Type, Record<Properties, Values>> = {
  vertical: {
    borderTop: 'var(--divider-offset) solid transparent',
    borderRight: 'none',
    borderBottom: 'var(--divider-offset) solid transparent',
    borderLeft: 'none',
    height: 'initial',
    width: 'var(--divider-weight)',
    backgroundColor: 'var(--divider-color)',
    backgroundClip: 'padding-box',
  },
  horizontal: {
    borderTop: 'none',
    borderRight: 'var(--divider-offset) solid transparent',
    borderBottom: 'none',
    borderLeft: 'var(--divider-offset) solid transparent',
    height: 'var(--divider-weight)',
    width: 'initial',
    backgroundColor: 'var(--divider-color)',
    backgroundClip: 'padding-box',
  },
}

const Styles = styleVariants(map, (value: any) => value)

export const Style: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['horizontal' as Type],
}
