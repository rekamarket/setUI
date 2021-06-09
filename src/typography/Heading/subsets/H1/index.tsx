import { FC } from 'react'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Component from '../../Component/Heading'

const displayName = 'Heading.H1'

const H1: FC<Props> = (props) =>
  Component({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    level: 1,
  })

H1.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default H1
