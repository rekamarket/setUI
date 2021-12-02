/* TypeScript file generated from BackgroundLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BackgroundLayerBS__Es6Import from './BackgroundLayer.js'
const BackgroundLayerBS: any = BackgroundLayerBS__Es6Import

import type { BackgroundAttachment_t as BackgroundAttachment_BackgroundAttachment_t } from '../../../../src/layers/Block/Background/Attachment/BackgroundAttachment.gen'

import type { BackgroundClip_t as BackgroundClip_BackgroundClip_t } from '../../../../src/layers/Block/Background/Clip/BackgroundClip.gen'

import type { BackgroundColor_t as BackgroundColor_BackgroundColor_t } from '../../../../src/layers/Block/Background/Color/BackgroundColor.gen'

import type { BackgroundOpacity_t as BackgroundOpacity_BackgroundOpacity_t } from '../../../../src/layers/Block/Background/Opacity/BackgroundOpacity.gen'

import type { BackgroundOrigin_t as BackgroundOrigin_BackgroundOrigin_t } from '../../../../src/layers/Block/Background/Origin/BackgroundOrigin.gen'

import type { BackgroundPosition_t as BackgroundPosition_BackgroundPosition_t } from '../../../../src/layers/Block/Background/Position/BackgroundPosition.gen'

import type { BackgroundRepeat_t as BackgroundRepeat_BackgroundRepeat_t } from '../../../../src/layers/Block/Background/Repeat/BackgroundRepeat.gen'

import type { BackgroundSize_t as BackgroundSize_BackgroundSize_t } from '../../../../src/layers/Block/Background/Size/BackgroundSize.gen'

export interface IBackgroundLayer_i {
  readonly backgroundAttachment: BackgroundAttachment_BackgroundAttachment_t
  readonly backgroundClip: BackgroundClip_BackgroundClip_t
  readonly backgroundColor: BackgroundColor_BackgroundColor_t
  readonly backgroundOpacity: BackgroundOpacity_BackgroundOpacity_t
  readonly backgroundOrigin: BackgroundOrigin_BackgroundOrigin_t
  readonly backgroundPosition: BackgroundPosition_BackgroundPosition_t
  readonly backgroundRepeat: BackgroundRepeat_BackgroundRepeat_t
  readonly backgroundSize: BackgroundSize_BackgroundSize_t
}

export const BackgroundLayer_resolve: (i: {
  readonly backgroundAttachment:
    | 'fixed'
    | 'inherit'
    | 'initial'
    | 'local'
    | 'revert'
    | 'scroll'
    | 'unset'
  readonly backgroundClip:
    | 'borderBox'
    | 'contentBox'
    | 'inherit'
    | 'initial'
    | 'paddingBox'
    | 'revert'
    | 'text'
    | 'unset'
  readonly backgroundColor: 'black' | 'primary' | 'secondary' | 'white'
  readonly backgroundOpacity:
    | 0
    | 10
    | 100
    | 20
    | 30
    | 40
    | 50
    | 60
    | 70
    | 80
    | 90
  readonly backgroundOrigin:
    | 'borderBox'
    | 'contentBox'
    | 'inherit'
    | 'initial'
    | 'paddingBox'
    | 'revert'
    | 'unset'
  readonly backgroundPosition:
    | 'bottom'
    | 'center'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'revert'
    | 'right'
    | 'top'
    | 'unset'
  readonly backgroundRepeat:
    | 'inherit'
    | 'initial'
    | 'noRepeat'
    | 'noRepeat_Round'
    | 'repeat'
    | 'repeatX'
    | 'repeatY'
    | 'repeat_Repeat'
    | 'repeat_Space'
    | 'revert'
    | 'round'
    | 'round_Space'
    | 'space'
    | 'unset'
  readonly backgroundSize:
    | 50
    | 'auto'
    | 'contain'
    | 'cover'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
}) => string = BackgroundLayerBS.BackgroundLayer.resolve

export const BackgroundLayer: {
  resolve: (i: {
    readonly backgroundAttachment:
      | 'fixed'
      | 'inherit'
      | 'initial'
      | 'local'
      | 'revert'
      | 'scroll'
      | 'unset'
    readonly backgroundClip:
      | 'borderBox'
      | 'contentBox'
      | 'inherit'
      | 'initial'
      | 'paddingBox'
      | 'revert'
      | 'text'
      | 'unset'
    readonly backgroundColor: 'black' | 'primary' | 'secondary' | 'white'
    readonly backgroundOpacity:
      | 0
      | 10
      | 100
      | 20
      | 30
      | 40
      | 50
      | 60
      | 70
      | 80
      | 90
    readonly backgroundOrigin:
      | 'borderBox'
      | 'contentBox'
      | 'inherit'
      | 'initial'
      | 'paddingBox'
      | 'revert'
      | 'unset'
    readonly backgroundPosition:
      | 'bottom'
      | 'center'
      | 'inherit'
      | 'initial'
      | 'left'
      | 'revert'
      | 'right'
      | 'top'
      | 'unset'
    readonly backgroundRepeat:
      | 'inherit'
      | 'initial'
      | 'noRepeat'
      | 'noRepeat_Round'
      | 'repeat'
      | 'repeatX'
      | 'repeatY'
      | 'repeat_Repeat'
      | 'repeat_Space'
      | 'revert'
      | 'round'
      | 'round_Space'
      | 'space'
      | 'unset'
    readonly backgroundSize:
      | 50
      | 'auto'
      | 'contain'
      | 'cover'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset'
  }) => string
} = BackgroundLayerBS.BackgroundLayer
