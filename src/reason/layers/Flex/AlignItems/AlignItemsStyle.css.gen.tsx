/* TypeScript file generated from AlignItemsStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as AlignItemsStyle_cssBS__Es6Import from './AlignItemsStyle.css.js'
const AlignItemsStyle_cssBS: any = AlignItemsStyle_cssBS__Es6Import

import type { IAlignItems_variant as IAlignItems_AlignItems_variant } from './AlignItems.gen'

// tslint:disable-next-line:interface-over-type-literal
export type AlignItemsStyle_t =
  | 'flexStart'
  | 'lastBaseline'
  | 'center'
  | 'normal'
  | 'start'
  | 'unsafeCenter'
  | 'baseline'
  | 'unset'
  | 'firstBaseline'
  | 'end'
  | 'stretch'
  | 'safeCenter'
  | 'flexEnd'

export interface IAlignItemsStyle_i {
  readonly alignItems: AlignItemsStyle_t
}

export const AlignItemsStyle_style: IAlignItems_AlignItems_variant =
  AlignItemsStyle_cssBS.AlignItemsStyle.style

export const AlignItemsStyle_resolve: (
  t:
    | 'baseline'
    | 'center'
    | 'end'
    | 'firstBaseline'
    | 'flexEnd'
    | 'flexStart'
    | 'lastBaseline'
    | 'normal'
    | 'safeCenter'
    | 'start'
    | 'stretch'
    | 'unsafeCenter'
    | 'unset'
) => string = AlignItemsStyle_cssBS.AlignItemsStyle.resolve

export const AlignItemsStyle: {
  resolve: (
    t:
      | 'baseline'
      | 'center'
      | 'end'
      | 'firstBaseline'
      | 'flexEnd'
      | 'flexStart'
      | 'lastBaseline'
      | 'normal'
      | 'safeCenter'
      | 'start'
      | 'stretch'
      | 'unsafeCenter'
      | 'unset'
  ) => string
  style: AlignItems_AlignItems_variant
} = AlignItemsStyle_cssBS.AlignItemsStyle
