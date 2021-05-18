import { FC } from 'react'
import cn from 'classnames'
import { ClassName } from './styles.css'

const Viewport: FC = ({ children }) => {
  return <div className={cn(ClassName)}>{children}</div>
}

export default Viewport
