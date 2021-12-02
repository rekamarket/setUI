/* TypeScript file generated from CharsPerLineLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as CharsPerLineLayerBS__Es6Import from './CharsPerLineLayer.js'
const CharsPerLineLayerBS: any = CharsPerLineLayerBS__Es6Import

import type { CharsPerLine_t as CharsPerLine_CharsPerLine_t } from '../../../../src/layers/Text/CharsPerLine/CharsPerLine/CharsPerLine.gen'

export interface ICharsPerLineLayer_i {
  readonly charsPerLine: CharsPerLine_CharsPerLine_t
}

export const CharsPerLineLayer_resolve: (i: {
  readonly charsPerLine: 'large' | 'medium' | 'none' | 'small'
}) => string = CharsPerLineLayerBS.CharsPerLineLayer.resolve

export const CharsPerLineLayer: {
  resolve: (i: {
    readonly charsPerLine: 'large' | 'medium' | 'none' | 'small'
  }) => string
} = CharsPerLineLayerBS.CharsPerLineLayer
