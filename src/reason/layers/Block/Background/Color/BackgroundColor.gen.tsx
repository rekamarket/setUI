/* TypeScript file generated from BackgroundColor.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BackgroundColorBS__Es6Import from './BackgroundColor.js'
const BackgroundColorBS: any = BackgroundColorBS__Es6Import

// tslint:disable-next-line:interface-over-type-literal
export type BackgroundColor_t = 'primary' | 'secondary' | 'white' | 'black'

export interface IBackgroundColor_i {
  readonly backgroundColor: BackgroundColor_t
}

export const BackgroundColor_initial: 'primary' =
  BackgroundColorBS.BackgroundColor.initial

export const BackgroundColor_options: {
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
} = BackgroundColorBS.BackgroundColor.options

export const BackgroundColor: {
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
} = BackgroundColorBS.BackgroundColor
