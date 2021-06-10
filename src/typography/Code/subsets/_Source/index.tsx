import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Set from '../../Set'

const displayName = 'Code'

const Source: FC<Props> = (props) =>
  Set({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    type: 'monospace',
  })

Source.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Source
