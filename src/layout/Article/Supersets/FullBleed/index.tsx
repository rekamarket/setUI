import { FC, createElement } from 'react'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles.css'

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

export type { Props } from './types'

export default FullBleed
