import { StateStyle } from 'utils'
import { AlignContent, alignContentResolve } from './alignContent'
import { AlignItems, alignItemsResolve } from './alignItems'
import { FlexDirection, flexDirectionResolve } from './flexDirection'
import { FlexWrap, flexWrapResolve } from './flexWrap'
import { Gap, gapResolve } from './gap'
import { JustifyContent, justifyContentResolve } from './justifyContent'
import type {
  Props,
  AlignContentType,
  AlignItemsType,
  FlexDirectionType,
  FlexWrapType,
  GapType,
  JustifyContentType,
} from './types'

class FlexLayer {
  CSSalignContent: AlignContentType
  CSSalignItems: AlignItemsType
  CSSflexDirection: FlexDirectionType
  CSSflexWrap: FlexWrapType
  CSSgap: GapType
  CSSjustifyContent: JustifyContentType

  public set(props: Props) {
    console.log('set', props)

    this.CSSalignContent = alignContentResolve<Props>(props)
    this.CSSalignItems = alignItemsResolve<Props>(props)
    this.CSSflexDirection = flexDirectionResolve<Props>(props)
    this.CSSflexWrap = flexWrapResolve<Props>(props)
    this.CSSgap = gapResolve<Props>(props)
    this.CSSjustifyContent = justifyContentResolve<Props>(props)

    return this
  }

  public get alignContent() {
    return AlignContent[this.CSSalignContent]
  }

  public get alignItems() {
    return AlignItems[this.CSSalignItems]
  }

  public get flexDirection() {
    return FlexDirection[this.CSSflexDirection]
  }

  public get flexWrap() {
    return FlexWrap[this.CSSflexWrap]
  }

  public get gap() {
    return Gap[this.CSSgap]
  }

  public get justifyContent() {
    return JustifyContent[this.CSSjustifyContent]
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
