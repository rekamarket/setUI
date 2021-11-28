/* TypeScript file generated from CornerRadius.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as CornerRadiusBS__Es6Import from './CornerRadius.js'
const CornerRadiusBS: any = CornerRadiusBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type CornerRadius_t =
  | 'none'
  | 'small'
  | 'medium'
  | 'large'
  | 'pill'
  | 'circle'

export interface ICornerRadius_i {
  readonly cornerRadius: CornerRadius_t
}

export const CornerRadius_initial: 'none' = CornerRadiusBS.CornerRadius.initial

export const CornerRadius_options: {
  readonly circle: string
  readonly large: string
  readonly medium: string
  readonly none: string
  readonly pill: string
  readonly small: string
} = CornerRadiusBS.CornerRadius.options

export const CornerRadius: {
  options: {
    readonly circle: string
    readonly large: string
    readonly medium: string
    readonly none: string
    readonly pill: string
    readonly small: string
  }
  initial: 'none'
} = CornerRadiusBS.CornerRadius
