import { FC, createElement } from 'react'
import cn from 'classnames'
import { BlockLayer, TextLayer } from 'layers'
import { PropsRequired } from './types'
import { ClassName } from './styles.css'
import { symbolResolve, symbolGapResolve, symbolSizeResolve } from './css'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})
const text = new TextLayer()

const BlockQuote: FC<PropsRequired> = ({
  // basic
  cite,
  className,

  children,

  ...rest
}) => (
  <blockquote
    cite={cite}
    className={cn([
      className,
      ClassName,

      block.set(rest).box,
      text.set(rest).box,
      symbolResolve<Partial<PropsRequired>>(rest),
      symbolGapResolve<Partial<PropsRequired>>(rest),
      symbolSizeResolve<Partial<PropsRequired>>(rest),
    ])}
  >
    {children}
  </blockquote>
)

export type { Props, PropsRequired } from './types'
export { SymbolKeys, SymbolGapKeys, SymbolSizeKeys } from './css'
export default BlockQuote
