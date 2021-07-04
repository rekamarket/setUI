import { marginResolve } from './margin'
import {
  BorderColor,
  borderColorResolve,
  BorderRadius,
  borderRadiusResolve,
  BorderStyle,
  borderStyleResolve,
  BorderThickness,
  borderThicknessResolve,
} from './border'
import {
  BackgroundClip,
  backgroundClipResolve,
  BackgroundColor,
  backgroundColorResolve,
  BackgroundOpacity,
  backgroundOpacityResolve,
} from './background'
import { paddingResolve } from './padding'
import type {
  Props,
  MarginType,
  BorderColorType,
  BorderRadiusType,
  BorderStyleType,
  BorderThicknessType,
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOpacityType,
  PaddingType,
} from './types'

class BoxLayer {
  // margin
  marginTop: MarginType
  marginRight: MarginType
  marginBottom: MarginType
  marginLeft: MarginType

  // border
  borderColor: BorderColorType
  borderRadius: BorderRadiusType
  borderStyle: BorderStyleType
  borderThickness: BorderThicknessType

  // background
  backgroundClip: BackgroundClipType
  backgroundColor: BackgroundColorType
  backgroundOpacity: BackgroundOpacityType

  // padding
  paddingTop: PaddingType
  paddingRight: PaddingType
  paddingBottom: PaddingType
  paddingLeft: PaddingType

  public set(props: Props) {
    console.log('set', props)

    // margin
    const margin = marginResolve<Props>(props)
    this.marginTop = margin.top
    this.marginRight = margin.right
    this.marginBottom = margin.bottom
    this.marginLeft = margin.left

    // border
    this.borderColor = borderColorResolve<Props>(props)
    this.borderRadius = borderRadiusResolve<Props>(props)
    this.borderStyle = borderStyleResolve<Props>(props)
    this.borderThickness = borderThicknessResolve<Props>(props)

    // background
    this.backgroundClip = backgroundClipResolve<Props>(props)
    this.backgroundColor = backgroundColorResolve<Props>(props)
    this.backgroundOpacity = backgroundOpacityResolve<Props>(props)

    // padding
    const padding = paddingResolve<Props>(props)
    this.paddingTop = padding.top
    this.paddingRight = padding.right
    this.paddingBottom = padding.bottom
    this.paddingLeft = padding.left

    return this
  }

  public get margin() {
    return [
      this.marginTop,
      this.marginRight,
      this.marginBottom,
      this.marginLeft,
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get border() {
    return [
      BorderColor[this.borderColor],
      BorderRadius[this.borderRadius],
      BorderStyle[this.borderStyle],
      BorderThickness[this.borderThickness],
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get background() {
    return [
      BackgroundClip[this.backgroundClip],
      BackgroundColor[this.backgroundColor],
      BackgroundOpacity[this.backgroundOpacity],
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get padding() {
    return [
      this.paddingTop,
      this.paddingRight,
      this.paddingBottom,
      this.paddingLeft,
    ]
      .filter(Boolean)
      .join(' ')
  }

  public get outer() {
    return [this.margin, this.border, this.background].filter(Boolean).join(' ')
  }

  public get inner() {
    return [this.padding].filter(Boolean).join(' ')
  }

  public get box() {
    return [this.outer, this.inner].filter(Boolean).join(' ')
  }
}

export type { Props } from './types'
export default BoxLayer
