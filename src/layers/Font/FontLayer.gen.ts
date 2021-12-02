/* TypeScript file generated from FontLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as FontLayerBS__Es6Import from './FontLayer.js'
const FontLayerBS: any = FontLayerBS__Es6Import

import type { FontFamily_t as FontFamily_FontFamily_t } from '../../../src/layers/Font/Family/FontFamily.gen'

import type { FontSize_t as FontSize_FontSize_t } from '../../../src/layers/Font/Size/FontSize.gen'

import type { FontStyle_t as FontStyle_FontStyle_t } from '../../../src/layers/Font/Style/FontStyle.gen'

import type { FontWeight_t as FontWeight_FontWeight_t } from '../../../src/layers/Font/Weight/FontWeight.gen'

export interface IFontLayer_i {
  readonly fontFamily: FontFamily_FontFamily_t
  readonly fontSize: FontSize_FontSize_t
  readonly fontStyle: FontStyle_FontStyle_t
  readonly fontWeight: FontWeight_FontWeight_t
}

export const FontLayer_resolve: (i: {
  readonly fontFamily: 'monospace' | 'primary'
  readonly fontSize:
    | 'large'
    | 'larger'
    | 'medium'
    | 'none'
    | 'small'
    | 'smaller'
    | 'xlarge'
    | 'xsmall'
    | 'xxlarge'
    | 'xxsmall'
    | 'xxxlarge'
    | 'xxxsmall'
  readonly fontStyle:
    | 'inherit'
    | 'initial'
    | 'italic'
    | 'normal'
    | 'oblique'
    | 'unset'
  readonly fontWeight:
    | 'bold'
    | 'bolder'
    | 'extraBold'
    | 'extraLight'
    | 'heavy'
    | 'inherit'
    | 'initial'
    | 'light'
    | 'lighter'
    | 'medium'
    | 'normal'
    | 'semiBold'
    | 'thin'
    | 'unset'
}) => string = FontLayerBS.FontLayer.resolve

export const FontLayer: {
  resolve: (i: {
    readonly fontFamily: 'monospace' | 'primary'
    readonly fontSize:
      | 'large'
      | 'larger'
      | 'medium'
      | 'none'
      | 'small'
      | 'smaller'
      | 'xlarge'
      | 'xsmall'
      | 'xxlarge'
      | 'xxsmall'
      | 'xxxlarge'
      | 'xxxsmall'
    readonly fontStyle:
      | 'inherit'
      | 'initial'
      | 'italic'
      | 'normal'
      | 'oblique'
      | 'unset'
    readonly fontWeight:
      | 'bold'
      | 'bolder'
      | 'extraBold'
      | 'extraLight'
      | 'heavy'
      | 'inherit'
      | 'initial'
      | 'light'
      | 'lighter'
      | 'medium'
      | 'normal'
      | 'semiBold'
      | 'thin'
      | 'unset'
  }) => string
} = FontLayerBS.FontLayer
