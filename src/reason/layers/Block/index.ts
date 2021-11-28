// Background
import { BackgroundAttachment_resolve } from './Background/Attachment/BackgroundAttachment.css.gen'
import { BackgroundClip_resolve } from './Background/Clip/BackgroundClip.css.gen'
import { BackgroundColor_resolve } from './Background/Color/BackgroundColor.css.gen'
import { BackgroundOpacity_resolve } from './Background/Opacity(synthetic)/BackgroundOpacity.css.gen'
import { BackgroundOrigin_resolve } from './Background/Origin/BackgroundOrigin.css.gen'
import { BackgroundPosition_resolve } from './Background/Position/BackgroundPosition.css.gen'
import { BackgroundRepeat_resolve } from './Background/Repeat/BackgroundRepeat.css.gen'
import { BackgroundSize_resolve } from './Background/Size/BackgroundSize.css.gen'

// Border
import { BorderColor_resolve } from './Border/Color/BorderColor.css.gen'
import { BorderOpacity_resolve } from './Border/Opacity(synthetic)/BorderOpacity.css.gen'
import { BorderStyle_resolve } from './Border/Style/BorderStyle.css.gen'
import { BorderThickness_resolve } from './Border/Thickness(border-width)/BorderThickness.css.gen'

// Content
import { ContentAlign_resolve } from './Content/Align(text-align)/ContentAlign.css.gen'

// Corner
import { CornerRadius_resolve } from './Corner/Radius(border-radius)/CornerRadius.css.gen'

// Margin
import { MarginBlockEnd_resolve } from './Margin/BlockEnd(margin-bottom)/MarginBlockEnd.css.gen'
import { MarginBlockStart_resolve } from './Margin/BlockStart(margin-top)/MarginBlockStart.css.gen'
import { MarginInlineEnd_resolve } from './Margin/InlineEnd(margin-right)/MarginInlineEnd.css.gen'
import { MarginInlineStart_resolve } from './Margin/InlineStart(margin-left)/MarginInlineStart.css.gen'

// Padding
import { PaddingBlockEnd_resolve } from './Padding/BlockEnd(padding-bottom)/PaddingBlockEnd.css.gen'
import { PaddingBlockStart_resolve } from './Padding/BlockStart(padding-top)/PaddingBlockStart.css.gen'
import { PaddingInlineEnd_resolve } from './Padding/InlineEnd(padding-right)/PaddingInlineEnd.css.gen'
import { PaddingInlineStart_resolve } from './Padding/InlineStart(padding-left)/PaddingInlineStart.css.gen'


import type { Props } from './types'

class BlockLayer {
  // background
  backgroundAttachment: string;
  backgroundClip: string;
  backgroundColor: string;
  backgroundOpacity: string;
  backgroundOrigin: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;

  // border
  borderColor: string;
  borderOpacity: string;
  borderStyle: string;
  borderThickness: string;

  // content
  contentAlign: string;

  // corner
  cornerRadius: string;

  // margin
  marginBlockEnd: string;
  marginBlockStart: string;
  marginInlineEnd: string;
  marginInlineStart: string;

  // padding
  paddingBlockEnd: string;
  paddingBlockStart: string;
  paddingInlineEnd: string;
  paddingInlineStart: string;

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
    this.backgroundAttachment = BackgroundAttachment_resolve(backgroundAttachment)
    this.backgroundClip = BackgroundClip_resolve(backgroundClip)
    this.backgroundColor = BackgroundColor_resolve(backgroundColor)
    this.backgroundOpacity = BackgroundOpacity_resolve(backgroundOpacity)
    this.backgroundOrigin = BackgroundOrigin_resolve(backgroundOrigin)
    this.backgroundPosition = BackgroundPosition_resolve(backgroundPosition)
    this.backgroundRepeat = BackgroundRepeat_resolve(backgroundRepeat)
    this.backgroundSize = BackgroundSize_resolve(backgroundSize)

    // border
    this.borderColor = BorderColor_resolve(borderColor)
    this.borderOpacity = BorderOpacity_resolve(borderOpacity)
    this.borderStyle = BorderStyle_resolve(borderStyle)
    this.borderThickness = BorderThickness_resolve(borderThickness)

    // content
    this.contentAlign = ContentAlign_resolve(contentAlign)

    // corner
    this.cornerRadius = CornerRadius_resolve(cornerRadius)

    // margin
    this.marginBlockEnd = MarginBlockEnd_resolve(marginBlockEnd)
    this.marginBlockStart = MarginBlockStart_resolve(marginBlockStart)
    this.marginInlineEnd = MarginInlineEnd_resolve(marginInlineEnd)
    this.marginInlineStart = MarginInlineStart_resolve(marginInlineStart)

    // padding
    this.paddingBlockEnd = PaddingBlockEnd_resolve(paddingBlockEnd)
    this.paddingBlockStart = PaddingBlockStart_resolve(paddingBlockStart)
    this.paddingInlineEnd = PaddingInlineEnd_resolve(paddingInlineEnd)
    this.paddingInlineStart = PaddingInlineStart_resolve(paddingInlineStart)

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
