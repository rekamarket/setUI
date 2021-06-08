import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Component from '../../Component'

const displayName = 'Code.Input'

const Input: FC<Props> = (props) =>
  Component({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'kbd',
    display: 'inlineBlock',
    type: 'monospace',
  })

Input.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Input
