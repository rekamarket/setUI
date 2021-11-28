/* TypeScript file generated from TextTransform.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as TextTransformBS__Es6Import from './TextTransform.js'
const TextTransformBS: any = TextTransformBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type TextTransform_t =
  | 'none'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'fullWidth'
  | 'fullSizeKana'

export interface ITextTransform_i {
  readonly textTransform: TextTransform_t
}

export const TextTransform_initial: 'none' =
  TextTransformBS.TextTransform.initial

export const TextTransform: { initial: 'none' } = TextTransformBS.TextTransform
