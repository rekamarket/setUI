import { mapToStyles, style } from '@vanilla-extract/css'
import { tuple } from 'utils'

const Sizes = ['underline', 'ghost', 'borderless']
const SIZES = tuple(...Sizes)
export type InputVariantType = typeof SIZES[number]

type Value = {
  color: string
  backgroundColor: string
  borderColor: string
  borderTopWidth?: number
  borderRightWidth?: number
  borderBottomWidth?: number
  borderLeftWidth?: number
  hover: Record<string, string>
  focus: Record<string, string | Record<string, string>>
  disabled: Record<string, string>
}

const map: Record<InputVariantType, Value> = {
  underline: {
    color: '#201F1E',
    backgroundColor: '#FFF',
    borderColor: 'hsl(var(--h) 0% 42% / var(--a))',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    hover: {
      borderColor: 'hsl(var(--h) calc(var(--s)/2) var(--l) / var(--a))',
    },
    focus: {
      borderColor: 'var(--color)',
      outline: 'none',
    },
    disabled: {
      color: '#A19F9D',
      backgroundColor: '#EDEBE9',
      borderColor: 'transparent',
    },
  },
  ghost: {
    color: '#201F1E',
    backgroundColor: '#FFF',
    borderColor: 'hsl(var(--h) 0% 60% / var(--a))',
    hover: {
      borderColor: 'hsl(var(--h) calc(var(--s)/2) var(--l) / var(--a))',
    },
    focus: {
      borderColor: 'var(--color)',
      outline: 'none',
    },
    disabled: {
      color: '#A19F9D',
      backgroundColor: '#EDEBE9',
      borderColor: 'transparent',
    },
  },
  borderless: {
    color: '#201F1E',
    backgroundColor: '#FFF',
    borderColor: 'hsl(var(--h) 0% 42% / var(--a))',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    hover: {
      borderColor: 'hsl(var(--h) calc(var(--s)/2) var(--l) / var(--a))',
    },
    focus: {
      borderColor: 'var(--color)',
      outline: 'none',
    },
    disabled: {
      color: '#A19F9D',
      backgroundColor: '#EDEBE9',
      borderColor: 'transparent',
    },
  },
}

const Styles = mapToStyles(map, (value) => ({
  color: String(value.color),
  borderColor: String(value.borderColor),
  backgroundColor: String(value.backgroundColor),
  borderStyle: 'solid',
  transition: '.2s color ease-in, .2s border ease-in, .2s background ease-in',
  ':hover': value.hover,
  ':focus': value.focus,
  ':disabled': value.disabled,
}))

export const InputVariant: typeof Styles & {
  default: string
} = {
  ...Styles,
  default: Styles['underline' as InputVariantType],
}
