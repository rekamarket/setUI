import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Important'

const Important: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'strong',
  })

Important.displayName = displayName

export default Important
