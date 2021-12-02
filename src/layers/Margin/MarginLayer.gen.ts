/* TypeScript file generated from MarginLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as MarginLayerBS__Es6Import from './MarginLayer.js'
const MarginLayerBS: any = MarginLayerBS__Es6Import

import type { MarginBlockEnd_t as MarginBlockEnd_MarginBlockEnd_t } from '../../../src/layers/Margin/BlockEnd/MarginBlockEnd.gen'

import type { MarginBlockStart_t as MarginBlockStart_MarginBlockStart_t } from '../../../src/layers/Margin/BlockStart/MarginBlockStart.gen'

import type { MarginInlineEnd_t as MarginInlineEnd_MarginInlineEnd_t } from '../../../src/layers/Margin/InlineEnd/MarginInlineEnd.gen'

import type { MarginInlineStart_t as MarginInlineStart_MarginInlineStart_t } from '../../../src/layers/Margin/InlineStart/MarginInlineStart.gen'

export interface IMarginLayer_i {
  readonly marginBlockEnd: MarginBlockEnd_MarginBlockEnd_t
  readonly marginBlockStart: MarginBlockStart_MarginBlockStart_t
  readonly marginInlineEnd: MarginInlineEnd_MarginInlineEnd_t
  readonly marginInlineStart: MarginInlineStart_MarginInlineStart_t
}

export const MarginLayer_resolve: (i: {
  readonly marginBlockEnd:
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
  readonly marginBlockStart:
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
  readonly marginInlineEnd:
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
  readonly marginInlineStart:
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
}) => string = MarginLayerBS.MarginLayer.resolve

export const MarginLayer: {
  resolve: (i: {
    readonly marginBlockEnd:
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
    readonly marginBlockStart:
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
    readonly marginInlineEnd:
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
    readonly marginInlineStart:
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
  }) => string
} = MarginLayerBS.MarginLayer
