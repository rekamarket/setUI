/* TypeScript file generated from ThemeColorLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ThemeColorLayerBS__Es6Import from './ThemeColorLayer.js'
const ThemeColorLayerBS: any = ThemeColorLayerBS__Es6Import

import type { ThemeColor_t as ThemeColor_ThemeColor_t } from './ThemeColor.gen'

export interface IThemeColorLayer_i {
  readonly color: ThemeColor_ThemeColor_t
}

export const ThemeColorLayer_resolve: (i: {
  readonly color: 'black' | 'primary' | 'secondary' | 'white'
}) => string = ThemeColorLayerBS.ThemeColorLayer.resolve

export const ThemeColorLayer: {
  resolve: (i: {
    readonly color: 'black' | 'primary' | 'secondary' | 'white'
  }) => string
} = ThemeColorLayerBS.ThemeColorLayer
