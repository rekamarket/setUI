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
import {
  BorderColor,
  borderColorResolve,
  BorderStyle,
  borderStyleResolve,
  BorderThickness,
  borderThicknessResolve,
} from './border'
import { CornerRadius, cornerRadiusResolve } from './corner'
import { marginResolve } from './margin'
import { paddingResolve } from './padding'
import { TextAlign, textAlignResolve } from './text'
import type {
  Config,
  Props,
  BackgroundAttachmentType,
  BackgroundClipType,
  BackgroundColorType,
  BackgroundOpacityType,
  BackgroundOriginType,
  BackgroundPositionType,
  BackgroundRepeatType,
  BackgroundSizeType,
  BorderColorType,
  BorderStyleType,
  BorderThicknessType,
  CornerRadiusType,
  MarginType,
  PaddingType,
  TextAlignType,
} from './types'

class BoxLayer {
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

  // border
  border: () => string
  borderColor: BorderColorType
  borderStyle: BorderStyleType
  borderThickness: BorderThicknessType

  // corner
  corner: () => string
  cornerRadius: CornerRadiusType

  // margin
  margin: () => string
  marginTop: MarginType
  marginRight: MarginType
  marginBottom: MarginType
  marginLeft: MarginType

  // padding
  padding: () => string
  paddingTop: PaddingType
  paddingRight: PaddingType
  paddingBottom: PaddingType
  paddingLeft: PaddingType

  // text
  text: () => string
  textAlign: TextAlignType

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

    if (config?.useCorner || true) {
      this.corner = () => {
        return [CornerRadius[this.cornerRadius]].filter(Boolean).join(' ')
      }
    } else {
      this.corner = () => {
        return ''
      }
    }

    if (config?.useText || true) {
      this.text = () => {
        return [TextAlign[this.textAlign]].filter(Boolean).join(' ')
      }
    } else {
      this.text = () => {
        return ''
      }
    }
  }

  public set(props: Props) {
    // margin
    const margin = marginResolve<Props>(props)
    this.marginTop = margin.top
    this.marginRight = margin.right
    this.marginBottom = margin.bottom
    this.marginLeft = margin.left

    // border
    this.borderColor = borderColorResolve<Props>(props)
    this.borderStyle = borderStyleResolve<Props>(props)
    this.borderThickness = borderThicknessResolve<Props>(props)

    // corner
    this.cornerRadius = cornerRadiusResolve<Props>(props)

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

    // text
    this.textAlign = textAlignResolve<Props>(props)

    return this
  }

  public get outer() {
    return [this.margin(), this.border(), this.background(), this.corner()]
      .filter(Boolean)
      .join(' ')
  }

  public get inner() {
    return [this.padding(), this.text()].filter(Boolean).join(' ')
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

export { BorderColorKeys, BorderStyleKeys, BorderThicknessKeys } from './border'

export type {
  Props,
  BorderProps,
  BackgroundProps,
  MarginProps,
  PaddingProps,
} from './types'
export default BoxLayer
