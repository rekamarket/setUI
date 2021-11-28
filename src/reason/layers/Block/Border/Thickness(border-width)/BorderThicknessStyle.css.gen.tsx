/* TypeScript file generated from BorderThicknessStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BorderThicknessStyle_cssBS__Es6Import from './BorderThicknessStyle.css.js'
const BorderThicknessStyle_cssBS: any = BorderThicknessStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BorderThicknessStyle_t =
  | 'none'
  | 'thin'
  | 'medium'
  | 'bold'
  | 'light'

export interface IBorderThicknessStyle_i {
  readonly borderThickness: BorderThicknessStyle_t
}

export const BorderThicknessStyle_resolve: (
  t: 'bold' | 'light' | 'medium' | 'none' | 'thin'
) => string = BorderThicknessStyle_cssBS.BorderThicknessStyle.resolve

export const BorderThicknessStyle: {
  resolve: (t: 'bold' | 'light' | 'medium' | 'none' | 'thin') => string
} = BorderThicknessStyle_cssBS.BorderThicknessStyle
