import { FC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  useMargin: true,
  usePadding: true,
})
const text = new TextLayer()

const Time: FC<Props> = ({
  datetime,
  title,

  children,

  ...rest
}) => (
  <time
    className={cn([ClassName, block.set(rest).padding, text.set(rest).box])}
    dateTime={datetime}
    title={title}
  >
    {children}
  </time>
)

export type { Props } from './types'

export default Time
