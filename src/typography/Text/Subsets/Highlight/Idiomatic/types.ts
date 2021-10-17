import type { Props as ParentProps } from '../types'

export type Props = Pick<ParentProps, 'color' | 'fontSize' | 'fontWeight'> &
  Required<Pick<ParentProps, 'title'>>
