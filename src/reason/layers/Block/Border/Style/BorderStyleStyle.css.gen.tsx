/* TypeScript file generated from BorderStyleStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BorderStyleStyle_cssBS__Es6Import from './BorderStyleStyle.css.js'
const BorderStyleStyle_cssBS: any = BorderStyleStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BorderStyleStyle_t =
  | 'none'
  | 'inset'
  | 'solid'
  | 'revert'
  | 'outset'
  | 'groove'
  | 'double'
  | 'initial'
  | 'dotted'
  | 'ridge'
  | 'inherit'
  | 'hidden'
  | 'unset'
  | 'dashed'

export interface IBorderStyleStyle_i {
  readonly borderStyle: BorderStyleStyle_t
}

export const BorderStyleStyle_resolve: (
  t:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inherit'
    | 'initial'
    | 'inset'
    | 'none'
    | 'outset'
    | 'revert'
    | 'ridge'
    | 'solid'
    | 'unset'
) => string = BorderStyleStyle_cssBS.BorderStyleStyle.resolve

export const BorderStyleStyle: {
  resolve: (
    t:
      | 'dashed'
      | 'dotted'
      | 'double'
      | 'groove'
      | 'hidden'
      | 'inherit'
      | 'initial'
      | 'inset'
      | 'none'
      | 'outset'
      | 'revert'
      | 'ridge'
      | 'solid'
      | 'unset'
  ) => string
} = BorderStyleStyle_cssBS.BorderStyleStyle
