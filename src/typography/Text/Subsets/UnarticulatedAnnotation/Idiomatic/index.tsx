import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'UnarticulatedAnnotation'

const UnarticulatedAnnotation: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'u',
  })

UnarticulatedAnnotation.displayName = displayName

export default UnarticulatedAnnotation
