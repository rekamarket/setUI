/* TypeScript file generated from PaddingBlockStartStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as PaddingBlockStartStyle_cssBS__Es6Import from './PaddingBlockStartStyle.css.js'
const PaddingBlockStartStyle_cssBS: any =
  PaddingBlockStartStyle_cssBS__Es6Import

import type { Padding_t as Padding_Padding_t } from '../../../../../../src/reason/layers/Block/Padding/Padding.gen'

// tslint:disable-next-line:interface-over-type-literal
export type PaddingBlockStartStyle_t =
  | 'none'
  | 'xxxlarge'
  | 'small'
  | 'xxxsmall'
  | 'xxsmall'
  | 'xlarge'
  | 'medium'
  | 'xxlarge'
  | 'large'
  | 'xsmall'

export interface IPaddingBlockStartStyle_i {
  readonly paddingBlockStart: Padding_Padding_t
}

export const PaddingBlockStartStyle_resolve: (
  t:
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
) => string = PaddingBlockStartStyle_cssBS.PaddingBlockStartStyle.resolve

export const PaddingBlockStartStyle: {
  resolve: (
    t:
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
  ) => string
} = PaddingBlockStartStyle_cssBS.PaddingBlockStartStyle
