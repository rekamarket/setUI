import { FC, createElement } from 'react'
import cn from 'classnames'
import { Display } from 'CSS'
import { BlockLayer, TextLayer } from 'layers'
import { weightResolve, Weight, WeightProps } from '../css'
import { PropsRequired } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const block = new BlockLayer({
  usePadding: true,
  useMargin: true,
})

const text = new TextLayer<WeightProps>({
  fontWeight: {
    resolver: weightResolve,
    Style: Weight,
  },
})

const Heading: FC<PropsRequired> = ({
  // basic
  level,
  className,
  title,

  // styles
  display,

  children,

  ...rest
}) => createElement(
  headers[level],

  {
    className: cn([
      className,
      ClassName,
      Display[display],
      block.set(rest).box,
      text.set(rest).box,
    ]),
  },

  children
)

export type { Props, PropsRequired } from './types'

export default Heading
