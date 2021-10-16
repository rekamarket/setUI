import type { Props as ParentProps } from '../types'

export type Props = Pick<
  ParentProps,
  'color' | 'fontFamily' | 'fontSize' | 'fontWeight' | 'margin' | 'padding'
>
