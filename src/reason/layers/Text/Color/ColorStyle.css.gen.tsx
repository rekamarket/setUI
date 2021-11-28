/* TypeScript file generated from ColorStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ColorStyle_cssBS__Es6Import from './ColorStyle.css.js'
const ColorStyle_cssBS: any = ColorStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type ColorStyle_t = 'white' | 'primary' | 'secondary' | 'black'

export interface IColorStyle_i {
  readonly color: ColorStyle_t
}

export const ColorStyle_resolve: (
  t: 'black' | 'primary' | 'secondary' | 'white'
) => string = ColorStyle_cssBS.ColorStyle.resolve

export const ColorStyle: {
  resolve: (t: 'black' | 'primary' | 'secondary' | 'white') => string
} = ColorStyle_cssBS.ColorStyle
