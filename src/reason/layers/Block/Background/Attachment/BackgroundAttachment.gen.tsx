/* TypeScript file generated from BackgroundAttachment.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BackgroundAttachmentBS__Es6Import from './BackgroundAttachment.js'
const BackgroundAttachmentBS: any = BackgroundAttachmentBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BackgroundAttachment_t =
  | 'scroll'
  | 'fixed'
  | 'local'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export interface IBackgroundAttachment_i {
  readonly backgroundAttachment: BackgroundAttachment_t
}

export const BackgroundAttachment_initial: 'scroll' =
  BackgroundAttachmentBS.BackgroundAttachment.initial

export const BackgroundAttachment_options: {
  readonly fixed: string
  readonly inherit: string
  readonly initial: string
  readonly local: string
  readonly revert: string
  readonly scroll: string
  readonly unset: string
} = BackgroundAttachmentBS.BackgroundAttachment.options

export const BackgroundAttachment: {
  options: {
    readonly fixed: string
    readonly inherit: string
    readonly initial: string
    readonly local: string
    readonly revert: string
    readonly scroll: string
    readonly unset: string
  }
  initial: 'scroll'
} = BackgroundAttachmentBS.BackgroundAttachment
