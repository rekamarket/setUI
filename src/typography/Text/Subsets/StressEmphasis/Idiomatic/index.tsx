import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'StressEmphasis'

const StressEmphasis: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'em',
  })

StressEmphasis.displayName = displayName

export default StressEmphasis
