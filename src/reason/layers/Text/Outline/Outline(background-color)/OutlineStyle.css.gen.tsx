/* TypeScript file generated from OutlineStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as OutlineStyle_cssBS__Es6Import from './OutlineStyle.css.js'
const OutlineStyle_cssBS: any = OutlineStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type OutlineStyle_t =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'initial'
  | 'black'

export interface IOutlineStyle_i {
  readonly backgroundColor: OutlineStyle_t
}

export const OutlineStyle_resolve: (
  t: 'black' | 'initial' | 'primary' | 'secondary' | 'transparent' | 'white'
) => string = OutlineStyle_cssBS.OutlineStyle.resolve

export const OutlineStyle: {
  resolve: (
    t: 'black' | 'initial' | 'primary' | 'secondary' | 'transparent' | 'white'
  ) => string
} = OutlineStyle_cssBS.OutlineStyle
