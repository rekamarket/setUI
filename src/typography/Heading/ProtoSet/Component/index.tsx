import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  colorResolve,
  textAlignResolve,
  TextDecorationColor,
  textDecorationResolve,
  TextDecorationStyle,
  TextDecorationThickness,
  textTransformResolve,
  fontSizeResolve,
  fontStyleResolve,
  fontWeightResolve,
  FontFamily,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  BorderWidth,
  Display,
  paddingResolve,
} from 'CSS'
import { weightResolve } from '../css'
import { PropsRequired } from './types'
import { headers } from './data'
import { ClassName } from './styles.css'

const Heading: FC<PropsRequired> = ({
  // basic
  level,
  className,
  title,

  // styles
  display,

  type,

  decorationColor,
  decorationStyle,
  decorationThickness,

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
        colorResolve<Partial<PropsRequired>>(rest),

        textAlignResolve<Partial<PropsRequired>>(rest),

        textDecorationResolve<Partial<PropsRequired>>(rest),
        TextDecorationColor[decorationColor] || TextDecorationColor.default,
        TextDecorationStyle[decorationStyle] || TextDecorationStyle.default,
        TextDecorationThickness[decorationThickness] ||
          TextDecorationThickness.initial,
        textTransformResolve<Partial<PropsRequired>>(rest),

        FontFamily[type] || FontFamily.default,
        fontSizeResolve<Partial<PropsRequired>>(rest),
        fontSizeResolve<Partial<PropsRequired>>(rest),
        weightResolve<Partial<PropsRequired>>(rest),

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
