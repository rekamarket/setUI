/* TypeScript file generated from InteractiveLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as InteractiveLayerBS__Es6Import from './InteractiveLayer.js'
const InteractiveLayerBS: any = InteractiveLayerBS__Es6Import

import type { InteractiveShape_t as InteractiveShape_InteractiveShape_t } from '../../../src/layers/Interactive/Shape/InteractiveShape.gen'

import type { InteractiveSize_t as InteractiveSize_InteractiveSize_t } from '../../../src/layers/Interactive/Size/InteractiveSize.gen'

import type { InteractiveVariant_t as InteractiveVariant_InteractiveVariant_t } from '../../../src/layers/Interactive/Variant/InteractiveVariant.gen'

export interface IInteractiveLayer_i {
  readonly interactiveShape: InteractiveShape_InteractiveShape_t
  readonly interactiveSize: InteractiveSize_InteractiveSize_t
  readonly interactiveVariant: InteractiveVariant_InteractiveVariant_t
}

export const InteractiveLayer_resolve: (i: {
  readonly interactiveShape: 'fit' | 'rect' | 'square'
  readonly interactiveSize: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
  readonly interactiveVariant: 'borderless' | 'ghost' | 'solid' | 'text'
}) => string = InteractiveLayerBS.InteractiveLayer.resolve

export const InteractiveLayer: {
  resolve: (i: {
    readonly interactiveShape: 'fit' | 'rect' | 'square'
    readonly interactiveSize: 'large' | 'medium' | 'small' | 'xlarge' | 'xsmall'
    readonly interactiveVariant: 'borderless' | 'ghost' | 'solid' | 'text'
  }) => string
} = InteractiveLayerBS.InteractiveLayer
