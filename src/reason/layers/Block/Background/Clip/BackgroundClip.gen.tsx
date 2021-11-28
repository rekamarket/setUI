/* TypeScript file generated from BackgroundClip.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BackgroundClipBS__Es6Import from './BackgroundClip.js'
const BackgroundClipBS: any = BackgroundClipBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BackgroundClip_t =
  | 'borderBox'
  | 'paddingBox'
  | 'contentBox'
  | 'text'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export interface IBackgroundClip_i {
  readonly backgroundClip: BackgroundClip_t
}

export const BackgroundClip_initial: 'borderBox' =
  BackgroundClipBS.BackgroundClip.initial

export const BackgroundClip_options: {
  readonly borderBox: string
  readonly contentBox: string
  readonly inherit: string
  readonly initial: string
  readonly paddingBox: string
  readonly revert: string
  readonly text: string
  readonly unset: string
} = BackgroundClipBS.BackgroundClip.options

export const BackgroundClip: {
  options: {
    readonly borderBox: string
    readonly contentBox: string
    readonly inherit: string
    readonly initial: string
    readonly paddingBox: string
    readonly revert: string
    readonly text: string
    readonly unset: string
  }
  initial: 'borderBox'
} = BackgroundClipBS.BackgroundClip
