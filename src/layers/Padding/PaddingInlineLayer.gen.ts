/* TypeScript file generated from PaddingInlineLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as PaddingInlineLayerBS__Es6Import from './PaddingInlineLayer.js'
const PaddingInlineLayerBS: any = PaddingInlineLayerBS__Es6Import

import type { PaddingInlineEnd_t as PaddingInlineEnd_PaddingInlineEnd_t } from '../../../src/layers/Padding/InlineEnd/PaddingInlineEnd.gen'

import type { PaddingInlineStart_t as PaddingInlineStart_PaddingInlineStart_t } from '../../../src/layers/Padding/InlineStart/PaddingInlineStart.gen'

export interface IPaddingInlineLayer_i {
  readonly paddingInlineEnd: PaddingInlineEnd_PaddingInlineEnd_t
  readonly paddingInlineStart: PaddingInlineStart_PaddingInlineStart_t
}

export const PaddingInlineLayer_resolve: (i: {
  readonly paddingInlineEnd:
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
  readonly paddingInlineStart:
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
}) => string = PaddingInlineLayerBS.PaddingInlineLayer.resolve

export const PaddingInlineLayer: {
  resolve: (i: {
    readonly paddingInlineEnd:
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
    readonly paddingInlineStart:
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
} = PaddingInlineLayerBS.PaddingInlineLayer
