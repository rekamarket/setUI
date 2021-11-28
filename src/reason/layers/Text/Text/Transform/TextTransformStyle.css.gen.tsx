/* TypeScript file generated from TextTransformStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as TextTransformStyle_cssBS__Es6Import from './TextTransformStyle.css.js'
const TextTransformStyle_cssBS: any = TextTransformStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type TextTransformStyle_t =
  | 'none'
  | 'lowercase'
  | 'capitalize'
  | 'fullWidth'
  | 'fullSizeKana'
  | 'uppercase'

export interface ITextTransformStyle_i {
  readonly textTransform: TextTransformStyle_t
}

export const TextTransformStyle_resolve: (
  t:
    | 'capitalize'
    | 'fullSizeKana'
    | 'fullWidth'
    | 'lowercase'
    | 'none'
    | 'uppercase'
) => string = TextTransformStyle_cssBS.TextTransformStyle.resolve

export const TextTransformStyle: {
  resolve: (
    t:
      | 'capitalize'
      | 'fullSizeKana'
      | 'fullWidth'
      | 'lowercase'
      | 'none'
      | 'uppercase'
  ) => string
} = TextTransformStyle_cssBS.TextTransformStyle
