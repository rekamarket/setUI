import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H2'

const H2: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 2,
  })

H2.displayName = displayName

export default H2
