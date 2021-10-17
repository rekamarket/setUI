import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Normal'

const Normal: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'span',
  })

Normal.displayName = displayName

export default Normal
