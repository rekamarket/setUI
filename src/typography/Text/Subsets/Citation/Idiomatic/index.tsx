import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Citation'

const Citation: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'cite',
  })

Citation.displayName = displayName

export default Citation
