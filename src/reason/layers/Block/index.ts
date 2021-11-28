// Background
import { BackgroundAttachmentStyle_resolve } from './Background/Attachment/BackgroundAttachmentStyle.css.gen'
import { BackgroundClipStyle_resolve } from './Background/Clip/BackgroundClipStyle.css.gen'
import { BackgroundColorStyle_resolve } from './Background/Color/BackgroundColorStyle.css.gen'
import { BackgroundOpacityStyle_resolve } from './Background/Opacity(--background-color)/BackgroundOpacityStyle.css.gen'
import { BackgroundOriginStyle_resolve } from './Background/Origin/BackgroundOriginStyle.css.gen'
import { BackgroundPositionStyle_resolve } from './Background/Position/BackgroundPositionStyle.css.gen'
import { BackgroundRepeatStyle_resolve } from './Background/Repeat/BackgroundRepeatStyle.css.gen'
import { BackgroundSizeStyle_resolve } from './Background/Size/BackgroundSizeStyle.css.gen'

// Border
import { BorderColorStyle_resolve } from './Border/Color/BorderColorStyle.css.gen'
import { BorderOpacityStyle_resolve } from './Border/Opacity(--border-opacity)/BorderOpacityStyle.css.gen'
import { BorderStyleStyle_resolve } from './Border/Style/BorderStyleStyle.css.gen'
import { BorderThicknessStyle_resolve } from './Border/Thickness(border-width)/BorderThicknessStyle.css.gen'

// Content
import { ContentAlignStyle_resolve } from './Content/Align(text-align)/ContentAlignStyle.css.gen'

// Corner
import { CornerRadiusStyle_resolve } from './Corner/Radius(border-radius)/CornerRadiusStyle.css.gen'

// Margin
import { MarginBlockEndStyle_resolve } from './Margin/BlockEnd(margin-bottom)/MarginBlockEndStyle.css.gen'
import { MarginBlockStartStyle_resolve } from './Margin/BlockStart(margin-top)/MarginBlockStartStyle.css.gen'
import { MarginInlineEndStyle_resolve } from './Margin/InlineEnd(margin-right)/MarginInlineEndStyle.css.gen'
import { MarginInlineStartStyle_resolve } from './Margin/InlineStart(margin-left)/MarginInlineStartStyle.css.gen'

// Padding
import { PaddingBlockEndStyle_resolve } from './Padding/BlockEnd(padding-bottom)/PaddingBlockEndStyle.css.gen'
import { PaddingBlockStartStyle_resolve } from './Padding/BlockStart(padding-top)/PaddingBlockStartStyle.css.gen'
import { PaddingInlineEndStyle_resolve } from './Padding/InlineEnd(padding-right)/PaddingInlineEndStyle.css.gen'
import { PaddingInlineStartStyle_resolve } from './Padding/InlineStart(padding-left)/PaddingInlineStartStyle.css.gen'

import type { Props } from './types'

class BlockLayer {
  // background
  backgroundAttachment: string
  backgroundClip: string
  backgroundColor: string
  backgroundOpacity: string
  backgroundOrigin: string
  backgroundPosition: string
  backgroundRepeat: string
  backgroundSize: string

  // border
  borderColor: string
  borderOpacity: string
  borderStyle: string
  borderThickness: string

  // content
  contentAlign: string

  // corner
  cornerRadius: string

  // margin
  marginBlockEnd: string
  marginBlockStart: string
  marginInlineEnd: string
  marginInlineStart: string

  // padding
  paddingBlockEnd: string
  paddingBlockStart: string
  paddingInlineEnd: string
  paddingInlineStart: string

  resolve({
    // background
    backgroundAttachment,
    backgroundClip,
    backgroundColor,
    backgroundOpacity,
    backgroundOrigin,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,

    // border
    borderColor,
    borderOpacity,
    borderStyle,
    borderThickness,

    // content
    contentAlign,

    // corner
    cornerRadius,

    // margin
    marginBlockEnd,
    marginBlockStart,
    marginInlineEnd,
    marginInlineStart,

    // padding
    paddingBlockEnd,
    paddingBlockStart,
    paddingInlineEnd,
    paddingInlineStart,
  }: Props) {
    // background
    this.backgroundAttachment =
      BackgroundAttachmentStyle_resolve(backgroundAttachment)
    this.backgroundClip = BackgroundClipStyle_resolve(backgroundClip)
    this.backgroundColor = BackgroundColorStyle_resolve(backgroundColor)
    this.backgroundOpacity = BackgroundOpacityStyle_resolve(backgroundOpacity)
    this.backgroundOrigin = BackgroundOriginStyle_resolve(backgroundOrigin)
    this.backgroundPosition =
      BackgroundPositionStyle_resolve(backgroundPosition)
    this.backgroundRepeat = BackgroundRepeatStyle_resolve(backgroundRepeat)
    this.backgroundSize = BackgroundSizeStyle_resolve(backgroundSize)

    // border
    this.borderColor = BorderColorStyle_resolve(borderColor)
    this.borderOpacity = BorderOpacityStyle_resolve(borderOpacity)
    this.borderStyle = BorderStyleStyle_resolve(borderStyle)
    this.borderThickness = BorderThicknessStyle_resolve(borderThickness)

    // content
    this.contentAlign = ContentAlignStyle_resolve(contentAlign)

    // corner
    this.cornerRadius = CornerRadiusStyle_resolve(cornerRadius)

    // margin
    this.marginBlockEnd = MarginBlockEndStyle_resolve(marginBlockEnd)
    this.marginBlockStart = MarginBlockStartStyle_resolve(marginBlockStart)
    this.marginInlineEnd = MarginInlineEndStyle_resolve(marginInlineEnd)
    this.marginInlineStart = MarginInlineStartStyle_resolve(marginInlineStart)

    // padding
    this.paddingBlockEnd = PaddingBlockEndStyle_resolve(paddingBlockEnd)
    this.paddingBlockStart = PaddingBlockStartStyle_resolve(paddingBlockStart)
    this.paddingInlineEnd = PaddingInlineEndStyle_resolve(paddingInlineEnd)
    this.paddingInlineStart =
      PaddingInlineStartStyle_resolve(paddingInlineStart)

    return [
      // background
      this.backgroundAttachment,
      this.backgroundClip,
      this.backgroundColor,
      this.backgroundOpacity,
      this.backgroundOrigin,
      this.backgroundPosition,
      this.backgroundRepeat,
      this.backgroundSize,

      // border
      this.borderColor,
      this.borderOpacity,
      this.borderStyle,
      this.borderThickness,

      // content
      this.contentAlign,

      // corner
      this.cornerRadius,

      // margin
      this.marginBlockEnd,
      this.marginBlockStart,
      this.marginInlineEnd,
      this.marginInlineStart,

      // padding
      this.paddingBlockEnd,
      this.paddingBlockStart,
      this.paddingInlineEnd,
      this.paddingInlineStart,
    ]
      .filter(Boolean)
      .join(' ')
  }
}

export type { Props } from './types'
export default BlockLayer
