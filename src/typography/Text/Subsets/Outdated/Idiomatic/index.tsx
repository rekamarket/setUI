import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Outdated'

const Outdated: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 's',
  })

Outdated.displayName = displayName

export default Outdated
