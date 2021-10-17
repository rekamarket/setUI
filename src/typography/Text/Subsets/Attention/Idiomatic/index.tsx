import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Attention'

const Attention: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'b',
  })

Attention.displayName = displayName

export default Attention
