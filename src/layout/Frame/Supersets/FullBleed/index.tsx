import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles.css'

export const displayName = 'Frame.FullBleed'

const FullBleed: FC<Props> = ({ className, children }) => (
  <div
    className={cn([
      // root
      className,
      ClassName,
    ])}
  >
    {children}
  </div>
)

FullBleed.displayName = displayName

export type { Props } from './types'

export default FullBleed
