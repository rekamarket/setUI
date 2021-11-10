import { FC, createElement } from 'react'
import cn from 'classnames'
import { LinkLayer, TextLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const link = new LinkLayer()

const text = new TextLayer({
  useSpacing: true,
})

const Link: FC<Props> = ({
  href,
  title,
  className,

  children,

  ...rest
}) => (
  <a
    href={href}
    className={cn([
      className,
      ClassName,
      link.set(rest).box,
      text.set(rest).box,
    ])}
    title={title}
  >
    {children}
  </a>
)

export type { Props } from './types'

export default Link
