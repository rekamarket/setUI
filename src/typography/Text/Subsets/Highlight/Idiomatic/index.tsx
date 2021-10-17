import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'Highlight'

const Highlight: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'mark',
  })

Highlight.displayName = displayName

export default Highlight
