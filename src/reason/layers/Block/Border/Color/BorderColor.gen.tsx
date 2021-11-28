/* TypeScript file generated from BorderColor.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BorderColorBS__Es6Import from './BorderColor.js'
const BorderColorBS: any = BorderColorBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BorderColor_t = 'primary' | 'secondary' | 'white' | 'black'

export interface IBorderColor_i {
  readonly borderColor: BorderColor_t
}

export const BorderColor_initial: 'primary' = BorderColorBS.BorderColor.initial

export const BorderColor_options: {
  readonly black: {
    readonly hue: string
    readonly lightness: string
    readonly saturation: string
  }
  readonly primary: {
    readonly hue: string
    readonly lightness: string
    readonly saturation: string
  }
  readonly secondary: {
    readonly hue: string
    readonly lightness: string
    readonly saturation: string
  }
  readonly white: {
    readonly hue: string
    readonly lightness: string
    readonly saturation: string
  }
} = BorderColorBS.BorderColor.options

export const BorderColor: {
  options: {
    readonly black: {
      readonly hue: string
      readonly lightness: string
      readonly saturation: string
    }
    readonly primary: {
      readonly hue: string
      readonly lightness: string
      readonly saturation: string
    }
    readonly secondary: {
      readonly hue: string
      readonly lightness: string
      readonly saturation: string
    }
    readonly white: {
      readonly hue: string
      readonly lightness: string
      readonly saturation: string
    }
  }
  initial: 'primary'
} = BorderColorBS.BorderColor
