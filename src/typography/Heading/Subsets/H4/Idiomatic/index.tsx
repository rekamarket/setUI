import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H4'

const H4: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 4,
  })

H4.displayName = displayName

export default H4
