/* TypeScript file generated from TextDecorationLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as TextDecorationLayerBS__Es6Import from './TextDecorationLayer.js'
const TextDecorationLayerBS: any = TextDecorationLayerBS__Es6Import

import type { TextDecorationColor_t as TextDecorationColor_TextDecorationColor_t } from '../../../../src/layers/Text/Decoration/Color/TextDecorationColor.gen'

import type { TextDecorationLine_t as TextDecorationLine_TextDecorationLine_t } from '../../../../src/layers/Text/Decoration/Line/TextDecorationLine.gen'

import type { TextDecorationStyle_t as TextDecorationStyle_TextDecorationStyle_t } from '../../../../src/layers/Text/Decoration/Style/TextDecorationStyle.gen'

import type { TextDecorationThickness_t as TextDecorationThickness_TextDecorationThickness_t } from '../../../../src/layers/Text/Decoration/Thickness/TextDecorationThickness.gen'

export interface ITextDecorationLayer_i {
  readonly textDecorationColor: TextDecorationColor_TextDecorationColor_t
  readonly textDecorationLine: TextDecorationLine_TextDecorationLine_t
  readonly textDecorationStyle: TextDecorationStyle_TextDecorationStyle_t
  readonly textDecorationThickness: TextDecorationThickness_TextDecorationThickness_t
}

export const TextDecorationLayer_resolve: (i: {
  readonly textDecorationColor:
    | 'black'
    | 'currentColor'
    | 'primary'
    | 'secondary'
    | 'white'
  readonly textDecorationLine:
    | 'blink'
    | 'inherit'
    | 'initial'
    | 'lineThrough'
    | 'lineThrough_underline'
    | 'none'
    | 'overline'
    | 'overline_lineThrough'
    | 'overline_lineThrough_underline'
    | 'overline_underline'
    | 'underline'
    | 'unset'
  readonly textDecorationStyle:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'inherit'
    | 'initial'
    | 'solid'
    | 'unset'
    | 'wavy'
  readonly textDecorationThickness:
    | 'auto'
    | 'bold'
    | 'fromFont'
    | 'inherit'
    | 'initial'
    | 'light'
    | 'medium'
    | 'thin'
    | 'unset'
}) => string = TextDecorationLayerBS.TextDecorationLayer.resolve

export const TextDecorationLayer: {
  resolve: (i: {
    readonly textDecorationColor:
      | 'black'
      | 'currentColor'
      | 'primary'
      | 'secondary'
      | 'white'
    readonly textDecorationLine:
      | 'blink'
      | 'inherit'
      | 'initial'
      | 'lineThrough'
      | 'lineThrough_underline'
      | 'none'
      | 'overline'
      | 'overline_lineThrough'
      | 'overline_lineThrough_underline'
      | 'overline_underline'
      | 'underline'
      | 'unset'
    readonly textDecorationStyle:
      | 'dashed'
      | 'dotted'
      | 'double'
      | 'inherit'
      | 'initial'
      | 'solid'
      | 'unset'
      | 'wavy'
    readonly textDecorationThickness:
      | 'auto'
      | 'bold'
      | 'fromFont'
      | 'inherit'
      | 'initial'
      | 'light'
      | 'medium'
      | 'thin'
      | 'unset'
  }) => string
} = TextDecorationLayerBS.TextDecorationLayer
