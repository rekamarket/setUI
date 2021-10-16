import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H6'

const H6: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 6,
  })

H6.displayName = displayName

export default H6
