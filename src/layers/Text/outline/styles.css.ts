import { styleVariants } from '@vanilla-extract/css'
import { tuple } from 'utils'

export const Keys = [
  'none',
  'transparent',
  'primary',
  'secondary',
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'grey',
  'blueGrey',
  'black',
  'white',
]
const VALUES = tuple(...Keys)
export type Type = typeof VALUES[number]

export const map: Record<Type, any> = {
  none: 'none',
  transparent: 'transparent',
  primary: '#0078D4',
  secondary: '#2B88D8',
  red: '#F44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  deepPurple: '#673AB7',
  indigo: '#3F51B5',
  blue: '#2196F3',
  lightBlue: '#03A9F4',
  cyan: '#00BCD4',
  teal: '#009688',
  green: '#4CAF50',
  lightGreen: '#8BC34A',
  lime: '#CDDC39',
  yellow: '#FFEB3B',
  amber: '#FFC107',
  orange: '#FF9800',
  deepOrange: '#FF5722',
  brown: '#795548',
  grey: '#9E9E9E',
  blueGrey: '#607D8B',
  black: '#000000',
  white: '#FFFFFF',
}

const Styles = styleVariants(map, (value: any) => ({
  backgroundColor: value,
}))

export const Style: typeof Styles & {
  default: string
  initial: string
} = {
  ...Styles,
  default: Styles['none' as Type],
  initial: Styles['inherit' as Type],
}
