import { FC } from 'react'
import { defaultProps } from './defaultProps'
import ProtoSet from '../../../ProtoSet'

export const displayName = 'H1'

const H1: FC = ({ children }) =>
  ProtoSet({
    ...defaultProps,
    level: 1,
    children,
  })

H1.displayName = displayName

export default H1
