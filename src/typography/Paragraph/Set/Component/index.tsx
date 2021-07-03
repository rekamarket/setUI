import { FC, createElement } from 'react'
import cn from 'classnames'
import { ZIndex } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { Props } from './types'
import { ClassName } from './styles.css'

const block = new BlockLayer()
const text = new TextLayer()

const Paragraph: FC<Props> = ({
  className,

  zIndex,

  children,

  ...rest
}) => {
  return (
    <p
      className={cn([
        // root
        className,
        ClassName,
        block.set(rest).box,
        text.set(rest).box,
        ZIndex[zIndex] || ZIndex.default,
      ])}
    >
      {children}
    </p>
  )
}

export type { Props } from './types'

export default Paragraph
