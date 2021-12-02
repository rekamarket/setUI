/* TypeScript file generated from MarkerLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as MarkerLayerBS__Es6Import from './MarkerLayer.js'
const MarkerLayerBS: any = MarkerLayerBS__Es6Import

import type { MarkerGap_t as MarkerGap_MarkerGap_t } from '../../../src/layers/Marker/Gap/MarkerGap.gen'

import type { MarkerPosition_t as MarkerPosition_MarkerPosition_t } from '../../../src/layers/Marker/Position/MarkerPosition.gen'

import type { MarkerSize_t as MarkerSize_MarkerSize_t } from '../../../src/layers/Marker/Size/MarkerSize.gen'

import type { MarkerSymbol_t as MarkerSymbol_MarkerSymbol_t } from '../../../src/layers/Marker/Symbol/MarkerSymbol.gen'

export interface IMarkerLayer_i {
  readonly markerGap: MarkerGap_MarkerGap_t
  readonly markerPosition: MarkerPosition_MarkerPosition_t
  readonly markerSize: MarkerSize_MarkerSize_t
  readonly markerSymbol: MarkerSymbol_MarkerSymbol_t
}

export const MarkerLayer_resolve: (i: {
  readonly markerGap:
    | 'large'
    | 'medium'
    | 'none'
    | 'small'
    | 'xlarge'
    | 'xsmall'
    | 'xxlarge'
    | 'xxsmall'
    | 'xxxlarge'
    | 'xxxsmall'
  readonly markerPosition: 'inside' | 'outside'
  readonly markerSize:
    | 'large'
    | 'medium'
    | 'none'
    | 'small'
    | 'xlarge'
    | 'xsmall'
    | 'xxlarge'
    | 'xxsmall'
    | 'xxxlarge'
    | 'xxxsmall'
  readonly markerSymbol: 'bullet' | 'circle' | 'none'
}) => string = MarkerLayerBS.MarkerLayer.resolve

export const MarkerLayer: {
  resolve: (i: {
    readonly markerGap:
      | 'large'
      | 'medium'
      | 'none'
      | 'small'
      | 'xlarge'
      | 'xsmall'
      | 'xxlarge'
      | 'xxsmall'
      | 'xxxlarge'
      | 'xxxsmall'
    readonly markerPosition: 'inside' | 'outside'
    readonly markerSize:
      | 'large'
      | 'medium'
      | 'none'
      | 'small'
      | 'xlarge'
      | 'xsmall'
      | 'xxlarge'
      | 'xxsmall'
      | 'xxxlarge'
      | 'xxxsmall'
    readonly markerSymbol: 'bullet' | 'circle' | 'none'
  }) => string
} = MarkerLayerBS.MarkerLayer
