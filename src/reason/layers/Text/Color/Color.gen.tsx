/* TypeScript file generated from Color.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ColorBS__Es6Import from './Color.js'
const ColorBS: any = ColorBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type Color_t = 'primary' | 'secondary' | 'black' | 'white'

export interface IColor_i {
  readonly color: Color_t
}

export const Color_initial: 'primary' = ColorBS.Color.initial

export const Color_options: {
  readonly black: string
  readonly primary: string
  readonly secondary: string
  readonly white: string
} = ColorBS.Color.options

export const Color: {
  options: {
    readonly black: string
    readonly primary: string
    readonly secondary: string
    readonly white: string
  }
  initial: 'primary'
} = ColorBS.Color
