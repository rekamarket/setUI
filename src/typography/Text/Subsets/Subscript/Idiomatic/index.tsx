import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Subscript'

const Subscript: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'sub',
  })

Subscript.displayName = displayName

export default Subscript
