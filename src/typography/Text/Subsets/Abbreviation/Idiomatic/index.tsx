import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Abbreviation'

const Abbreviation: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'abbr',
  })

Abbreviation.displayName = displayName

export default Abbreviation
