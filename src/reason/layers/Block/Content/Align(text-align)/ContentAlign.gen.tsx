/* TypeScript file generated from ContentAlign.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ContentAlignBS__Es6Import from './ContentAlign.js'
const ContentAlignBS: any = ContentAlignBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type ContentAlign_t =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justifyAll'
  | 'start'
  | 'end'
  | 'matchParent'
  | 'dot'
  | 'dotCenter'
  | 'inherit'
  | 'initial'
  | 'unset'

export interface IContentAlign_i {
  readonly contentAlign: ContentAlign_t
}

export const ContentAlign_initial: 'start' = ContentAlignBS.ContentAlign.initial

export const ContentAlign_options: {
  readonly center: string
  readonly dot: string
  readonly dotCenter: string
  readonly end: string
  readonly inherit: string
  readonly initial: string
  readonly justify: string
  readonly justifyAll: string
  readonly left: string
  readonly matchParent: string
  readonly right: string
  readonly start: string
  readonly unset: string
} = ContentAlignBS.ContentAlign.options

export const ContentAlign: {
  options: {
    readonly center: string
    readonly dot: string
    readonly dotCenter: string
    readonly end: string
    readonly inherit: string
    readonly initial: string
    readonly justify: string
    readonly justifyAll: string
    readonly left: string
    readonly matchParent: string
    readonly right: string
    readonly start: string
    readonly unset: string
  }
  initial: 'start'
} = ContentAlignBS.ContentAlign
