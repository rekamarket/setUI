import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'TextInline'

const TextInline: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    as: 'span',
  })

TextInline.displayName = displayName

export default TextInline
