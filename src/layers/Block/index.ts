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
  BackgroundAttachment,
  backgroundAttachmentResolve,
  BackgroundClip,
  backgroundClipResolve,
  BackgroundColor,
  backgroundColorResolve,
  BackgroundOpacity,
  backgroundOpacityResolve,
  BackgroundOrigin,
  backgroundOriginResolve,
  BackgroundPosition,
  backgroundPositionResolve,
  BackgroundRepeat,
  backgroundRepeatResolve,
  BackgroundSize,
  backgroundSizeResolve,
} from './background'
import { paddingResolve } from './padding'
import type {
  Config,
  Props,
  MarginType,
  BorderColorType,
  BorderRadiusType,
  BorderStyleType,
  BorderThicknessType,
  BackgroundAttachmentType,
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOpacityType,
  BackgroundOriginType,
  BackgroundPositionType,
  BackgroundRepeatType,
  BackgroundSizeType,
  PaddingType,
} from './types'

class BoxLayer {
  // margin
  margin: () => string
  marginTop: MarginType
  marginRight: MarginType
  marginBottom: MarginType
  marginLeft: MarginType

  // border
  border: () => string
  borderColor: BorderColorType
  borderRadius: BorderRadiusType
  borderStyle: BorderStyleType
  borderThickness: BorderThicknessType

  // background
  background: () => string
  backgroundAttachment: BackgroundAttachmentType
  backgroundClip: BackgroundClipType
  backgroundColor: BackgroundColorType
  backgroundOpacity: BackgroundOpacityType
  backgroundOrigin: BackgroundOriginType
  backgroundPosition: BackgroundPositionType
  backgroundRepeat: BackgroundRepeatType
  backgroundSize: BackgroundSizeType

  // padding
  padding: () => string
  paddingTop: PaddingType
  paddingRight: PaddingType
  paddingBottom: PaddingType
  paddingLeft: PaddingType

  constructor(config?: Config) {
    if (config?.useBackground) {
      this.background = () => {
        return [
          BackgroundAttachment[this.backgroundAttachment],
          BackgroundClip[this.backgroundClip],
          BackgroundColor[this.backgroundColor],
          BackgroundOpacity[this.backgroundOpacity],
          BackgroundOrigin[this.backgroundOrigin],
          BackgroundPosition[this.backgroundPosition],
          BackgroundRepeat[this.backgroundRepeat],
          BackgroundSize[this.backgroundSize],
        ]
          .filter(Boolean)
          .join(' ')
      }
    } else {
      this.background = () => {
        return ''
      }
    }

    if (config?.useBorder) {
      this.border = () => {
        return [
          BorderColor[this.borderColor],
          BorderRadius[this.borderRadius],
          BorderStyle[this.borderStyle],
          BorderThickness[this.borderThickness],
        ]
          .filter(Boolean)
          .join(' ')
      }
    } else {
      this.border = () => {
        return ''
      }
    }

    if (config?.useMargin) {
      this.margin = () => {
        console.log('this.marginTop', this.marginTop)
        return [
          this.marginTop,
          this.marginRight,
          this.marginBottom,
          this.marginLeft,
        ]
          .filter(Boolean)
          .join(' ')
      }
    } else {
      this.margin = () => {
        return ''
      }
    }

    if (config?.usePadding) {
      this.padding = () => {
        return [
          this.paddingTop,
          this.paddingRight,
          this.paddingBottom,
          this.paddingLeft,
        ]
          .filter(Boolean)
          .join(' ')
      }
    } else {
      this.padding = () => {
        return ''
      }
    }
  }

  public set(props: Props) {
    // margin
    const margin = marginResolve<Props>(props)
    console.log('set', props, margin)
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
    this.backgroundAttachment = backgroundAttachmentResolve<Props>(props)
    this.backgroundClip = backgroundClipResolve<Props>(props)
    this.backgroundColor = backgroundColorResolve<Props>(props)
    this.backgroundOpacity = backgroundOpacityResolve<Props>(props)
    this.backgroundOrigin = backgroundOriginResolve<Props>(props)
    this.backgroundPosition = backgroundPositionResolve<Props>(props)
    this.backgroundRepeat = backgroundRepeatResolve<Props>(props)
    this.backgroundSize = backgroundSizeResolve<Props>(props)

    // padding
    const padding = paddingResolve<Props>(props)
    this.paddingTop = padding.top
    this.paddingRight = padding.right
    this.paddingBottom = padding.bottom
    this.paddingLeft = padding.left

    return this
  }

  public get outer() {
    return [this.margin(), this.border(), this.background()]
      .filter(Boolean)
      .join(' ')
  }

  public get inner() {
    return [this.padding()].filter(Boolean).join(' ')
  }

  public get box() {
    return [this.outer, this.inner].filter(Boolean).join(' ')
  }
}

export {
  argTypes,
  backgroundArgTypes,
  borderArgTypes,
  marginArgTypes,
  marginShorthandnArgTypes,
  paddingArgTypes,
  paddingShorthandArgTypes,
} from './storybook'

export { PaddingKeys } from './padding'
export { MarginKeys } from './margin'

export {
  BackgroundAttachmentKeys,
  BackgroundClipKeys,
  BackgroundColorKeys,
  BackgroundOpacityKeys,
  BackgroundOriginKeys,
  BackgroundPositionKeys,
  BackgroundRepeatKeys,
  BackgroundSizeKeys,
} from './background'

export {
  BorderColorKeys,
  BorderRadiusKeys,
  BorderStyleKeys,
  BorderThicknessKeys,
} from './border'

export type {
  Props,
  BorderProps,
  BackgroundProps,
  MarginProps,
  PaddingProps,
} from './types'
export default BoxLayer
