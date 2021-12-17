/* TypeScript file generated from ButtonLinkLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ButtonLinkLayerBS__Es6Import from './ButtonLinkLayer.js'
const ButtonLinkLayerBS: any = ButtonLinkLayerBS__Es6Import

import type { ButtonLinkVariant_t as ButtonLinkVariant_ButtonLinkVariant_t } from '../../../src/layers/Interactive/Variant/ButtonLink/ButtonLinkVariant.gen'

import type { InteractiveColor_t as InteractiveColor_InteractiveColor_t } from '../../../src/layers/Color/Interactive/InteractiveColor.gen'

import type { InteractiveSize_t as InteractiveSize_InteractiveSize_t } from '../../../src/layers/Interactive/Size/InteractiveSize.gen'

export interface IButtonLinkLayer_i {
  readonly color: InteractiveColor_InteractiveColor_t
  readonly size: InteractiveSize_InteractiveSize_t
  readonly variant: ButtonLinkVariant_ButtonLinkVariant_t
}

export const ButtonLinkLayer_resolve: (i: {
  readonly color: 'black' | 'primary' | 'secondary' | 'white'
  readonly size: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
  readonly variant: 'borderless' | 'ghost' | 'solid' | 'text'
}) => string = ButtonLinkLayerBS.ButtonLinkLayer.resolve

export const ButtonLinkLayer: {
  resolve: (i: {
    readonly color: 'black' | 'primary' | 'secondary' | 'white'
    readonly size: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
    readonly variant: 'borderless' | 'ghost' | 'solid' | 'text'
  }) => string
} = ButtonLinkLayerBS.ButtonLinkLayer
