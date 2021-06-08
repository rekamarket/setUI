import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Component from '../../Component'

const displayName = 'Code.Output'

const Output: FC<Props> = (props) =>
  Component({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'samp',
    type: 'monospace',
  })

Output.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Output
