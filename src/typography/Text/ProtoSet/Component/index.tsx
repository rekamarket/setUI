import { FC, createElement } from 'react'
import cn from 'classnames'
import { paddingResolve } from 'CSS'
import { TextLayer } from 'layers'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const styles = new TextLayer()

const Text: FC<PropsRequired> = ({
  // basic
  as,
  title,
  className,

  children,

  ...rest
}) => {
  const { paddingTop, paddingRight, paddingBottom, paddingLeft } =
    paddingResolve<Partial<PropsRequired>>(rest)

  return createElement(
    component[as],

    {
      className: cn([
        className,
        ClassName,

        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,

        styles.set(rest).box,
      ]),
      title,
    },

    children
  )
}

export type { Props, PropsRequired, PaddingType } from './types'

export default Text
