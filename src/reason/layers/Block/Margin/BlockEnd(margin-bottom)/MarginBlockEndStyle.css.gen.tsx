/* TypeScript file generated from MarginBlockEndStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as MarginBlockEndStyle_cssBS__Es6Import from './MarginBlockEndStyle.css.js'
const MarginBlockEndStyle_cssBS: any = MarginBlockEndStyle_cssBS__Es6Import

import type { Margin_t as Margin_Margin_t } from '../../../../../../src/reason/layers/Block/Margin/Margin.gen'

// tslint:disable-next-line:interface-over-type-literal
export type MarginBlockEndStyle_t =
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

export interface IMarginBlockEndStyle_i {
  readonly marginBlockEnd: Margin_Margin_t
}

export const MarginBlockEndStyle_resolve: (
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
) => string = MarginBlockEndStyle_cssBS.MarginBlockEndStyle.resolve

export const MarginBlockEndStyle: {
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
} = MarginBlockEndStyle_cssBS.MarginBlockEndStyle
