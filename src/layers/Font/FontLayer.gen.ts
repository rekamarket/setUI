/* TypeScript file generated from FontLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js'
const Curry: any = Curry__Es6Import

// @ts-ignore: Implicit any on import
import * as FontLayerBS__Es6Import from './FontLayer.js'
const FontLayerBS: any = FontLayerBS__Es6Import

import type { FontFamily_t as FontFamily_FontFamily_t } from '../../../src/layers/Font/Family/FontFamily.gen'

import type { FontSize_t as FontSize_FontSize_t } from '../../../src/layers/Font/Size/FontSize.gen'

import type { FontStyle_t as FontStyle_FontStyle_t } from '../../../src/layers/Font/Style/FontStyle.gen'

import type { FontWeight_t as FontWeight_FontWeight_t } from '../../../src/layers/Font/Weight/FontWeight.gen'

export const FontLayer_resolve: (_1: {
  readonly fontFamily: FontFamily_FontFamily_t
  readonly fontSize: FontSize_FontSize_t
  readonly fontStyle: FontStyle_FontStyle_t
  readonly fontWeight: FontWeight_FontWeight_t
}) => string = function (Arg1: any) {
  const result = Curry._4(
    FontLayerBS.FontLayer.resolve,
    Arg1.fontFamily,
    Arg1.fontSize,
    Arg1.fontStyle,
    Arg1.fontWeight
  )
  return result
}
