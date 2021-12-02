/* TypeScript file generated from QuoteLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as QuoteLayerBS__Es6Import from './QuoteLayer.js'
const QuoteLayerBS: any = QuoteLayerBS__Es6Import

import type { QuoteGap_t as QuoteGap_QuoteGap_t } from '../../../src/layers/Quote/Gap/QuoteGap.gen'

import type { QuotePosition_t as QuotePosition_QuotePosition_t } from '../../../src/layers/Quote/Position/QuotePosition.gen'

import type { QuoteSize_t as QuoteSize_QuoteSize_t } from '../../../src/layers/Quote/Size/QuoteSize.gen'

import type { QuoteSymbol_t as QuoteSymbol_QuoteSymbol_t } from '../../../src/layers/Quote/Symbol/QuoteSymbol.gen'

export interface IQuoteLayer_i {
  readonly quoteGap: QuoteGap_QuoteGap_t
  readonly quotePosition: QuotePosition_QuotePosition_t
  readonly quoteSize: QuoteSize_QuoteSize_t
  readonly quoteSymbol: QuoteSymbol_QuoteSymbol_t
}

export const QuoteLayer_resolve: (i: {
  readonly quoteGap:
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
  readonly quotePosition: 'inside' | 'outside'
  readonly quoteSize:
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
  readonly quoteSymbol:
    | 'LeftDouble'
    | 'LeftDoubleAngle'
    | 'RightDouble'
    | 'RightDoubleAngle'
    | 'none'
}) => string = QuoteLayerBS.QuoteLayer.resolve

export const QuoteLayer: {
  resolve: (i: {
    readonly quoteGap:
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
    readonly quotePosition: 'inside' | 'outside'
    readonly quoteSize:
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
    readonly quoteSymbol:
      | 'LeftDouble'
      | 'LeftDoubleAngle'
      | 'RightDouble'
      | 'RightDoubleAngle'
      | 'none'
  }) => string
} = QuoteLayerBS.QuoteLayer
