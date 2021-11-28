/* TypeScript file generated from SpacingBeforeStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as SpacingBeforeStyle_cssBS__Es6Import from './SpacingBeforeStyle.css.js'
const SpacingBeforeStyle_cssBS: any = SpacingBeforeStyle_cssBS__Es6Import

import type { Spacing_t as Spacing_Spacing_t } from '../../../../../../src/reason/layers/Text/Spacing/Spacing.gen'

// tslint:disable-next-line:interface-over-type-literal
export type SpacingBeforeStyle_t =
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

export interface ISpacingBeforeStyle_i {
  readonly spacingBefore: Spacing_Spacing_t
}

export const SpacingBeforeStyle_resolve: (
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
) => string = SpacingBeforeStyle_cssBS.SpacingBeforeStyle.resolve

export const SpacingBeforeStyle: {
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
} = SpacingBeforeStyle_cssBS.SpacingBeforeStyle
