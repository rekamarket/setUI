import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Set from '../../Set'

const displayName = 'Code.Variable'

const Variable: FC<Props> = (props) =>
  Set({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'var',
    type: 'monospace',
  })

Variable.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Variable
