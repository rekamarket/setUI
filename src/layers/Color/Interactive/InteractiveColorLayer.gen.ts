/* TypeScript file generated from InteractiveColorLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as InteractiveColorLayerBS__Es6Import from './InteractiveColorLayer.js'
const InteractiveColorLayerBS: any = InteractiveColorLayerBS__Es6Import

import type { InteractiveColor_t as InteractiveColor_InteractiveColor_t } from './InteractiveColor.gen'

export interface IInteractiveColorLayer_i {
  readonly color: InteractiveColor_InteractiveColor_t
}

export const InteractiveColorLayer_resolve: (i: {
  readonly color: 'black' | 'primary' | 'secondary' | 'white'
}) => string = InteractiveColorLayerBS.InteractiveColorLayer.resolve

export const InteractiveColorLayer: {
  resolve: (i: {
    readonly color: 'black' | 'primary' | 'secondary' | 'white'
  }) => string
} = InteractiveColorLayerBS.InteractiveColorLayer
