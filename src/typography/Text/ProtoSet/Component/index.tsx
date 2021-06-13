import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  Color,
  textAlignResolve,
  TextDecorationColor,
  TextDecorationLine,
  textDecorationResolve,
  TextDecorationStyle,
  TextDecorationThickness,
  textTransformResolve,
  FontFamily,
  FontSize,
  FontStyle,
  fontWeightResolve,
  paddingResolve,
} from 'CSS'
import { PropsRequired } from './types'
import { component } from './data'
import { ClassName } from './styles.css'

const Text: FC<PropsRequired> = ({
  // basic
  as,
  title,
  className,

  // styles
  background,
  color,

  decorationColor,
  decorationStyle,
  decorationThickness,

  type,
  size,
  style,

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
        BackgroundColor[background] || BackgroundColor.default,
        Color[color] || Color.black,

        textAlignResolve<Partial<PropsRequired>>(rest),

        textDecorationResolve<Partial<PropsRequired>>(rest),
        TextDecorationColor[decorationColor] || TextDecorationColor.default,
        TextDecorationStyle[decorationStyle] || TextDecorationStyle.default,
        TextDecorationThickness[decorationThickness] ||
          TextDecorationThickness.initial,
        textTransformResolve<Partial<PropsRequired>>(rest),

        FontFamily[type] || FontFamily.default,
        FontSize[size] || FontSize.medium,
        FontStyle[style] || FontStyle.default,
        fontWeightResolve<Partial<PropsRequired>>(rest),

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

export default Text
