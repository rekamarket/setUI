import { VFC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles.css'

export const displayName = 'Frame.FullBleed'

const FullBleed: VFC<Props> = ({ className, children }) =>
  createElement(
    'div',
    {
      className: cn([
        // root
        className,
        ClassName,
      ]),
    },
    children
  )

FullBleed.displayName = displayName

export type { Props } from './types'
export default FullBleed
