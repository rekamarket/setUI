import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  Color,
  Display,
  TextAlign,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  paddingResolve,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  BorderWidth,
} from 'CSS'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Code: FC<PropsRequired> = ({
  as,
  className,
  title,

  color,
  display,

  align,

  type,
  size,
  style,
  weight,

  background,

  borderColor,
  borderRadius,
  borderWidth,

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
        Display[display],
        Color[color],

        TextAlign[align],

        FontFamily[type],
        FontSize[size],
        FontStyle[style],
        FontWeight[weight],

        BackgroundColor[background],

        BorderColor[borderColor],
        BorderRadius[borderRadius],
        BorderWidth[borderWidth],

        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      ]),
      title,
    },

    children
  )
}

export type { Props, PropsRequired, PaddingType } from './types'

export default Code
