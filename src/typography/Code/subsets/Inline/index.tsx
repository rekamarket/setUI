import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Set from '../../Set'

const displayName = 'Code.Inline'

const Inline: FC<Props> = (props) =>
  Set({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'code',
    type: 'monospace',
  })

Inline.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Inline
