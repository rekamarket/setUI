import { Theme, themeResolve } from '../css'

import type { ConfigOverride, Props, ThemeType } from './types'

class LinkLayer {
  CSStheme: ThemeType

  constructor(config?: ConfigOverride) {}

  public set(props: Props) {
    this.CSStheme = themeResolve<Props>(props)

    return this
  }

  public get theme() {
    return Theme[this.CSStheme]
  }

  public get box() {
    return [this.theme].filter(Boolean).join(' ')
  }
}

export { Theme, useTheme, themeResolve, ThemeContext, ThemeKeys } from '../css'
export type { Props } from './types'
export default LinkLayer
