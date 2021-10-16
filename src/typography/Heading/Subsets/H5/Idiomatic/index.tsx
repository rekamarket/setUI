import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H5'

const H5: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 5,
  })

H5.displayName = displayName

export default H5
