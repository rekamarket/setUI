import { AlignContent } from './AlignContent/AlignContent.css.gen'
import { AlignItems } from './AlignItems/AlignItems.css.gen'
import { FlexDirection } from './FlexDirection/FlexDirection.css.gen'
import { FlexWrap } from './FlexWrap/FlexWrap.css.gen'
import { Gap } from './Gap/Gap.css.gen'
import { JustifyContent } from './JustifyContent/JustifyContent.css.gen'
import type { Props } from './types'

class FlexLayer {
  alignContent: string
  alignItems: string
  flexDirection: string
  flexWrap: string
  gap: string
  justifyContent: string

  public set(props: Props) {
    this.alignContent = AlignContent.resolve(props)
    this.alignItems = AlignItems.resolve(props)
    this.flexDirection = FlexDirection.resolve(props)
    this.flexWrap = FlexWrap.resolve(props)
    this.gap = Gap.resolve(props)
    this.justifyContent = JustifyContent.resolve(props)

    return this
  }

  public get box() {
    return [
      this.alignContent,
      this.alignItems,
      this.flexDirection,
      this.flexWrap,
      this.gap,
      this.justifyContent,
    ]
      .filter(Boolean)
      .join(' ')
  }
}

export type { Props } from './types'
export default FlexLayer
