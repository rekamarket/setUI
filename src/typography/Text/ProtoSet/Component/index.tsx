import { FC, createElement } from 'react'
import cn from 'classnames'
import {
  BackgroundColor,
  colorResolve,
  textAlignResolve,
  TextDecorationColor,
  textDecorationResolve,
  TextDecorationStyle,
  TextDecorationThickness,
  textTransformResolve,
  FontFamily,
  fontSizeResolve,
  fontStyleResolve,
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

  decorationColor,
  decorationStyle,
  decorationThickness,

  type,

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
        fontStyleResolve<Partial<PropsRequired>>(rest),
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
