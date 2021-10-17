import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Disclaimer'

const Disclaimer: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'small',
  })

Disclaimer.displayName = displayName

export default Disclaimer
