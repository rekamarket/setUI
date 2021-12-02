/* TypeScript file generated from BorderLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as BorderLayerBS__Es6Import from './BorderLayer.js'
const BorderLayerBS: any = BorderLayerBS__Es6Import

import type { BorderColor_t as BorderColor_BorderColor_t } from '../../../../src/layers/Block/Border/Color/BorderColor.gen'

import type { BorderOpacity_t as BorderOpacity_BorderOpacity_t } from '../../../../src/layers/Block/Border/Opacity/BorderOpacity.gen'

import type { BorderStyle_t as BorderStyle_BorderStyle_t } from '../../../../src/layers/Block/Border/Style/BorderStyle.gen'

import type { BorderThickness_t as BorderThickness_BorderThickness_t } from '../../../../src/layers/Block/Border/Thickness/BorderThickness.gen'

export interface IBorderLayer_i {
  readonly borderColor: BorderColor_BorderColor_t
  readonly borderOpacity: BorderOpacity_BorderOpacity_t
  readonly borderStyle: BorderStyle_BorderStyle_t
  readonly borderThickness: BorderThickness_BorderThickness_t
}

export const BorderLayer_resolve: (i: {
  readonly borderColor: 'black' | 'primary' | 'secondary' | 'white'
  readonly borderOpacity: 0 | 10 | 100 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
  readonly borderStyle:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inherit'
    | 'initial'
    | 'inset'
    | 'none'
    | 'outset'
    | 'revert'
    | 'ridge'
    | 'solid'
    | 'unset'
  readonly borderThickness: 'bold' | 'light' | 'medium' | 'none' | 'thin'
}) => string = BorderLayerBS.BorderLayer.resolve

export const BorderLayer: {
  resolve: (i: {
    readonly borderColor: 'black' | 'primary' | 'secondary' | 'white'
    readonly borderOpacity: 0 | 10 | 100 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
    readonly borderStyle:
      | 'dashed'
      | 'dotted'
      | 'double'
      | 'groove'
      | 'hidden'
      | 'inherit'
      | 'initial'
      | 'inset'
      | 'none'
      | 'outset'
      | 'revert'
      | 'ridge'
      | 'solid'
      | 'unset'
    readonly borderThickness: 'bold' | 'light' | 'medium' | 'none' | 'thin'
  }) => string
} = BorderLayerBS.BorderLayer
