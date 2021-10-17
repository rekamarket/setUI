import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'DefinedTerm'

const DefinedTerm: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'dfn',
  })

DefinedTerm.displayName = displayName

export default DefinedTerm
