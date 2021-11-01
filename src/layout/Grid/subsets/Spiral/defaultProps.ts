import type { Props } from './types'

export const basicProps: Partial<Props> = {}

export const defaultProps: Partial<Props> = {
  ...basicProps,

  margin: 'none',
  padding: 'none',
  gap: 'medium',
}
