/* TypeScript file generated from OverlayLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as OverlayLayerBS__Es6Import from './OverlayLayer.js'
const OverlayLayerBS: any = OverlayLayerBS__Es6Import

import type { OverlayColor_t as OverlayColor_OverlayColor_t } from '../../../src/layers/Overlay/Color/OverlayColor.gen'

export interface IOverlayLayer_i {
  readonly overlayColor: OverlayColor_OverlayColor_t
}

export const OverlayLayer_resolve: (i: {
  readonly overlayColor: 'black' | 'primary' | 'secondary' | 'white'
}) => string = OverlayLayerBS.OverlayLayer.resolve

export const OverlayLayer: {
  resolve: (i: {
    readonly overlayColor: 'black' | 'primary' | 'secondary' | 'white'
  }) => string
} = OverlayLayerBS.OverlayLayer
