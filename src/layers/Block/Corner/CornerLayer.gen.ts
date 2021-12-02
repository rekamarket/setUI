/* TypeScript file generated from CornerLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as CornerLayerBS__Es6Import from './CornerLayer.js'
const CornerLayerBS: any = CornerLayerBS__Es6Import

import type { CornerRadius_t as CornerRadius_CornerRadius_t } from '../../../../src/layers/Block/Corner/Radius/CornerRadius.gen'

export interface ICornerLayer_i {
  readonly cornerRadius: CornerRadius_CornerRadius_t
}

export const CornerLayer_resolve: (i: {
  readonly cornerRadius:
    | 'circle'
    | 'large'
    | 'medium'
    | 'none'
    | 'pill'
    | 'small'
}) => string = CornerLayerBS.CornerLayer.resolve

export const CornerLayer: {
  resolve: (i: {
    readonly cornerRadius:
      | 'circle'
      | 'large'
      | 'medium'
      | 'none'
      | 'pill'
      | 'small'
  }) => string
} = CornerLayerBS.CornerLayer
