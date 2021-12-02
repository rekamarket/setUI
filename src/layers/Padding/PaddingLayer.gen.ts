/* TypeScript file generated from PaddingLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as PaddingLayerBS__Es6Import from './PaddingLayer.js'
const PaddingLayerBS: any = PaddingLayerBS__Es6Import

import type { PaddingBlockEnd_t as PaddingBlockEnd_PaddingBlockEnd_t } from '../../../src/layers/Padding/BlockEnd/PaddingBlockEnd.gen'

import type { PaddingBlockStart_t as PaddingBlockStart_PaddingBlockStart_t } from '../../../src/layers/Padding/BlockStart/PaddingBlockStart.gen'

import type { PaddingInlineEnd_t as PaddingInlineEnd_PaddingInlineEnd_t } from '../../../src/layers/Padding/InlineEnd/PaddingInlineEnd.gen'

import type { PaddingInlineStart_t as PaddingInlineStart_PaddingInlineStart_t } from '../../../src/layers/Padding/InlineStart/PaddingInlineStart.gen'

export interface IPaddingLayer_i {
  readonly paddingBlockEnd: PaddingBlockEnd_PaddingBlockEnd_t
  readonly paddingBlockStart: PaddingBlockStart_PaddingBlockStart_t
  readonly paddingInlineEnd: PaddingInlineEnd_PaddingInlineEnd_t
  readonly paddingInlineStart: PaddingInlineStart_PaddingInlineStart_t
}

export const PaddingLayer_resolve: (i: {
  readonly paddingBlockEnd:
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
  readonly paddingBlockStart:
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
}) => string = PaddingLayerBS.PaddingLayer.resolve

export const PaddingLayer: {
  resolve: (i: {
    readonly paddingBlockEnd:
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
    readonly paddingBlockStart:
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
} = PaddingLayerBS.PaddingLayer
