import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  FontFamily,
  FontSize,
  FontStyle,
  Color,
  TextAlign,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  BorderWidth,
  Display,
  paddingResolve,
} from 'CSS'
import { Weight } from '../css'
import { PropsRequired } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const Heading: FC<PropsRequired> = ({
  // basic
  level,
  className,
  title,

  // styles
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
    headers[level],

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
        Weight[weight],

        BackgroundColor[background],

        BorderColor[borderColor],
        BorderRadius[borderRadius],
        BorderWidth[borderWidth],

        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      ]),
    },

    children
  )
}

export type { Props, PropsRequired, PaddingType } from './types'

export default Heading
