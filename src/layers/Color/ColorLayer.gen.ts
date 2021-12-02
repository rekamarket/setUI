/* TypeScript file generated from ColorLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ColorLayerBS__Es6Import from './ColorLayer.js'
const ColorLayerBS: any = ColorLayerBS__Es6Import

import type { Color_t as Color_Color_t } from '../../../src/layers/Color/Color/Color.gen'

export interface IColorLayer_i {
  readonly color: Color_Color_t
}

export const ColorLayer_resolve: (i: {
  readonly color: 'black' | 'primary' | 'secondary' | 'white'
}) => string = ColorLayerBS.ColorLayer.resolve

export const ColorLayer: {
  resolve: (i: {
    readonly color: 'black' | 'primary' | 'secondary' | 'white'
  }) => string
} = ColorLayerBS.ColorLayer
