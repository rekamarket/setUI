/* TypeScript file generated from JustifyContentStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as JustifyContentStyle_cssBS__Es6Import from './JustifyContentStyle.css.js'
const JustifyContentStyle_cssBS: any = JustifyContentStyle_cssBS__Es6Import

import type { IJustifyContent_variant as IJustifyContent_JustifyContent_variant } from './JustifyContent.gen'

// tslint:disable-next-line:interface-over-type-literal
export type JustifyContentStyle_t =
  | 'flexStart'
  | 'right'
  | 'spaceAround'
  | 'center'
  | 'normal'
  | 'spaceBetween'
  | 'start'
  | 'unsafeCenter'
  | 'spaceEvenly'
  | 'left'
  | 'end'
  | 'stretch'
  | 'safeCenter'
  | 'flexEnd'

export interface IJustifyContentStyle_i {
  readonly justifyContent: JustifyContentStyle_t
}

export const JustifyContentStyle_style: IJustifyContent_JustifyContent_variant =
  JustifyContentStyle_cssBS.JustifyContentStyle.style

export const JustifyContentStyle_resolve: (
  t:
    | 'center'
    | 'end'
    | 'flexEnd'
    | 'flexStart'
    | 'left'
    | 'normal'
    | 'right'
    | 'safeCenter'
    | 'spaceAround'
    | 'spaceBetween'
    | 'spaceEvenly'
    | 'start'
    | 'stretch'
    | 'unsafeCenter'
) => string = JustifyContentStyle_cssBS.JustifyContentStyle.resolve

export const JustifyContentStyle: {
  resolve: (
    t:
      | 'center'
      | 'end'
      | 'flexEnd'
      | 'flexStart'
      | 'left'
      | 'normal'
      | 'right'
      | 'safeCenter'
      | 'spaceAround'
      | 'spaceBetween'
      | 'spaceEvenly'
      | 'start'
      | 'stretch'
      | 'unsafeCenter'
  ) => string
  style: JustifyContent_JustifyContent_variant
} = JustifyContentStyle_cssBS.JustifyContentStyle
