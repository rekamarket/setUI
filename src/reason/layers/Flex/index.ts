import { AlignContentStyle_resolve } from './AlignContent/AlignContentStyle.css.gen'
import { AlignItemsStyle_resolve } from './AlignItems/AlignItemsStyle.css.gen'
import { FlexDirectionStyle_resolve } from './FlexDirection/FlexDirectionStyle.css.gen'
import { FlexWrapStyle_resolve } from './FlexWrap/FlexWrapStyle.css.gen'
import { GapStyle_resolve } from './Gap/GapStyle.css.gen'
import { JustifyContentStyle_resolve } from './JustifyContent/JustifyContentStyle.css.gen'
import type { Props } from './types'

class FlexLayer {
  alignContent: string
  alignItems: string
  flexDirection: string
  flexWrap: string
  gap: string
  justifyContent: string

  resolve({
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,
  }: Props) {
    this.alignContent = AlignContentStyle_resolve(alignContent)
    this.alignItems = AlignItemsStyle_resolve(alignItems)
    this.flexDirection = FlexDirectionStyle_resolve(flexDirection)
    this.flexWrap = FlexWrapStyle_resolve(flexWrap)
    this.gap = GapStyle_resolve(gap)
    this.justifyContent = JustifyContentStyle_resolve(justifyContent)

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
