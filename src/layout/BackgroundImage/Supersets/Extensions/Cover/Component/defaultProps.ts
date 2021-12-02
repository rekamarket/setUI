import type { Props } from './types'

export const defaultProps: Partial<
  Omit<
    Props,
    | 'children'
    | 'as'
    | 'backgroundAttachment'
    | 'backgroundSize'
    | 'alignItems'
    | 'contentAlign'
    | 'justifyContent'
    | 'image'
  >
> = {}
