/* TypeScript file generated from BackgroundOrigin.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BackgroundOriginBS__Es6Import from './BackgroundOrigin.js'
const BackgroundOriginBS: any = BackgroundOriginBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BackgroundOrigin_t =
  | 'borderBox'
  | 'paddingBox'
  | 'contentBox'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export interface IBackgroundOrigin_i {
  readonly backgroundOrigin: BackgroundOrigin_t
}

export const BackgroundOrigin_initial: 'paddingBox' =
  BackgroundOriginBS.BackgroundOrigin.initial

export const BackgroundOrigin_options: {
  readonly borderBox: string
  readonly contentBox: string
  readonly inherit: string
  readonly initial: string
  readonly paddingBox: string
  readonly revert: string
  readonly unset: string
} = BackgroundOriginBS.BackgroundOrigin.options

export const BackgroundOrigin: {
  options: {
    readonly borderBox: string
    readonly contentBox: string
    readonly inherit: string
    readonly initial: string
    readonly paddingBox: string
    readonly revert: string
    readonly unset: string
  }
  initial: 'paddingBox'
} = BackgroundOriginBS.BackgroundOrigin
