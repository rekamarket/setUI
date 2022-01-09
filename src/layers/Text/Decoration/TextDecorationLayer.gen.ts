/* TypeScript file generated from TextDecorationLayer.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as TextDecorationLayerBS__Es6Import from './TextDecorationLayer.js';
const TextDecorationLayerBS: any = TextDecorationLayerBS__Es6Import;

import type {TextDecorationColor_t as TextDecorationColor_TextDecorationColor_t} from '../../../../src/layers/Text/Decoration/Color/TextDecorationColor.gen';

import type {TextDecorationLine_t as TextDecorationLine_TextDecorationLine_t} from '../../../../src/layers/Text/Decoration/Line/TextDecorationLine.gen';

import type {TextDecorationStyle_t as TextDecorationStyle_TextDecorationStyle_t} from '../../../../src/layers/Text/Decoration/Style/TextDecorationStyle.gen';

import type {TextDecorationThickness_t as TextDecorationThickness_TextDecorationThickness_t} from '../../../../src/layers/Text/Decoration/Thickness/TextDecorationThickness.gen';

export const TextDecorationLayer_resolve: (_1:{
  readonly textDecorationColor: TextDecorationColor_TextDecorationColor_t; 
  readonly textDecorationLine: TextDecorationLine_TextDecorationLine_t; 
  readonly textDecorationStyle: TextDecorationStyle_TextDecorationStyle_t; 
  readonly textDecorationThickness: TextDecorationThickness_TextDecorationThickness_t
}) => string = function (Arg1: any) {
  const result = Curry._4(TextDecorationLayerBS.TextDecorationLayer.resolve, Arg1.textDecorationColor, Arg1.textDecorationLine, Arg1.textDecorationStyle, Arg1.textDecorationThickness);
  return result
};
