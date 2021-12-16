/* TypeScript file generated from InteractiveLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as InteractiveLayerBS__Es6Import from './InteractiveLayer.js'
const InteractiveLayerBS: any = InteractiveLayerBS__Es6Import

import type { InteractiveColor_t as InteractiveColor_InteractiveColor_t } from '../../../src/layers/Color/Interactive/InteractiveColor.gen'

import type { InteractiveSize_t as InteractiveSize_InteractiveSize_t } from '../../../src/layers/Interactive/Size/InteractiveSize.gen'

import type { InteractiveVariant_t as InteractiveVariant_InteractiveVariant_t } from '../../../src/layers/Interactive/Variant/InteractiveVariant.gen'

export interface IInteractiveLayer_i {
  readonly color: InteractiveColor_InteractiveColor_t
  readonly size: InteractiveSize_InteractiveSize_t
  readonly variant: InteractiveVariant_InteractiveVariant_t
}

export const InteractiveLayer_resolve: (i: {
  readonly color: 'black' | 'primary' | 'secondary' | 'white'
  readonly size: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
  readonly variant: 'borderless' | 'ghost' | 'solid' | 'text'
}) => string = InteractiveLayerBS.InteractiveLayer.resolve

export const InteractiveLayer: {
  resolve: (i: {
    readonly color: 'black' | 'primary' | 'secondary' | 'white'
    readonly size: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
    readonly variant: 'borderless' | 'ghost' | 'solid' | 'text'
  }) => string
} = InteractiveLayerBS.InteractiveLayer
