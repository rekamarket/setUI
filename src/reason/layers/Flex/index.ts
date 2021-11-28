import { AlignContent_resolve } from './AlignContent.css.gen'
import { AlignItems_resolve } from './AlignItems.css.gen'
import { FlexDirection_resolve } from './FlexDirection.css.gen'
import { FlexWrap_resolve } from './FlexWrap.css.gen'
import { Gap_resolve } from './Gap.css.gen'
import { JustifyContent_resolve } from './JustifyContent.css.gen'
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
    this.alignContent = AlignContent_resolve(alignContent)
    this.alignItems = AlignItems_resolve(alignItems)
    this.flexDirection = FlexDirection_resolve(flexDirection)
    this.flexWrap = FlexWrap_resolve(flexWrap)
    this.gap = Gap_resolve(gap)
    this.justifyContent = JustifyContent_resolve(justifyContent)

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
