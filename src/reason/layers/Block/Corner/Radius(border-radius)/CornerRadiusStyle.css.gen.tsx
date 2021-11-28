/* TypeScript file generated from CornerRadiusStyle.css.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as CornerRadiusStyle_cssBS__Es6Import from './CornerRadiusStyle.css.js'
const CornerRadiusStyle_cssBS: any = CornerRadiusStyle_cssBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type CornerRadiusStyle_t =
  | 'none'
  | 'small'
  | 'pill'
  | 'medium'
  | 'large'
  | 'circle'

export interface ICornerRadiusStyle_i {
  readonly cornerRadius: CornerRadiusStyle_t
}

export const CornerRadiusStyle_resolve: (
  t: 'circle' | 'large' | 'medium' | 'none' | 'pill' | 'small'
) => string = CornerRadiusStyle_cssBS.CornerRadiusStyle.resolve

export const CornerRadiusStyle: {
  resolve: (
    t: 'circle' | 'large' | 'medium' | 'none' | 'pill' | 'small'
  ) => string
} = CornerRadiusStyle_cssBS.CornerRadiusStyle
