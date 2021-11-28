/* TypeScript file generated from FontSize.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as FontSizeBS__Es6Import from './FontSize.js'
const FontSizeBS: any = FontSizeBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type FontSize_t =
  | 'larger'
  | 'smaller'
  | 'none'
  | 'xxxsmall'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'

export interface IFontSize_i {
  readonly fontSize: FontSize_t
}

export const FontSize_initial: number = FontSizeBS.FontSize.initial

export const FontSize: { initial: number } = FontSizeBS.FontSize
