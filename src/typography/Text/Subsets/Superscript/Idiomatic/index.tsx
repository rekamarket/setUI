import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Superscript'

const Superscript: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'sup',
  })

Superscript.displayName = displayName

export default Superscript
