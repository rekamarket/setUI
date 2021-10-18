import { style } from '@vanilla-extract/css'

export const ClassName = style({
  background: 'var(--divider-color)',
  height: 'var(--divider-weight)',
  width: 'calc(100% - 2*var(--divider-offset))',
})
