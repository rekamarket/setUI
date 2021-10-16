import { FC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'
import { SymbolLayer } from './layers'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})
const text = new TextLayer()
const symbol = new SymbolLayer()

const BlockQuote: FC<PropsRequired> = ({
  // basic
  cite,
  className,

  children,

  ...rest
}) => {
  console.log('>', symbol.set(rest).box)

  return (
    <blockquote
      cite={cite}
      className={cn([
        className,
        ClassName,

        block.set(rest).box,
        text.set(rest).box,
        symbol.set(rest).box,
      ])}
    >
      {children}
    </blockquote>
  )
}

export type { Props, PropsRequired } from './types'
export { symbolArgTypes } from './layers'
export default BlockQuote
