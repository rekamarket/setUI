import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Idiomatic'

const Idiomatic: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'i',
  })

Idiomatic.displayName = displayName

export default Idiomatic
