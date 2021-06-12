import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  BackgroundColor,
  FontFamily,
  FontWeight,
  FontSize,
  paddingResolve,
} from 'CSS'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Edit: FC<PropsRequired> = ({
  // basic
  as,
  cite,
  datetime,
  className,

  // styles
  background,
  color,

  type,
  size,
  weight,

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
        Color[color],
        BackgroundColor[background],

        FontFamily[type],
        FontSize[size],
        FontWeight[weight],

        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      ]),
      cite,
      dateTime: datetime,
    },

    children
  )
}

export type { Props, PropsRequired, PaddingType } from './types'

export default Edit
