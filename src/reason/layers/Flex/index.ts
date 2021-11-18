import { AlignContent, AlignContent_t } from './AlignContent/AlignContent.css.gen'
import { AlignItems, AlignItems_t } from './AlignItems/AlignItems.css.gen'
import { FlexDirection, FlexDirection_t } from './FlexDirection/FlexDirection.css.gen'
import { FlexWrap, FlexWrap_t } from './FlexWrap/FlexWrap.css.gen'
import { Gap, Gap_t } from './Gap/Gap.css.gen'
import { JustifyContent, JustifyContent_t } from './JustifyContent/JustifyContent.css.gen'
import type { Props } from './types'

class FlexLayer {
  alignContent: AlignContent_t
  alignItems: AlignItems_t
  flexDirection: FlexDirection_t
  flexWrap: FlexWrap_t
  gap: Gap_t
  justifyContent: JustifyContent_t

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
