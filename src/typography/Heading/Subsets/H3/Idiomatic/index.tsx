import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H3'

const H3: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 3,
  })

H3.displayName = displayName

export default H3
