import { VFC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../../ProtoSet'

export const displayName = 'Center'

const Center: VFC<Props> = (props) =>
  ProtoSet({
    ...object.mergePropsWithWarning(
      defaultProps,
      {
        alignItems: 'stretch',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'center',
      },
      displayName
    ),

    ...props,
  })

Center.displayName = displayName

export default Center
