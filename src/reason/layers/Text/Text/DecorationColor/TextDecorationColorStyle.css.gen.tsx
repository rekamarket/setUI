/* TypeScript file generated from TextDecorationColorStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as TextDecorationColorStyle_cssBS__Es6Import from './TextDecorationColorStyle.css.js'
const TextDecorationColorStyle_cssBS: any =
  TextDecorationColorStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type TextDecorationColorStyle_t =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'black'
  | 'currentColor'

export interface ITextDecorationColorStyle_i {
  readonly textDecorationColor: TextDecorationColorStyle_t
}

export const TextDecorationColorStyle_resolve: (
  t: 'black' | 'currentColor' | 'primary' | 'secondary' | 'white'
) => string = TextDecorationColorStyle_cssBS.TextDecorationColorStyle.resolve

export const TextDecorationColorStyle: {
  resolve: (
    t: 'black' | 'currentColor' | 'primary' | 'secondary' | 'white'
  ) => string
} = TextDecorationColorStyle_cssBS.TextDecorationColorStyle
