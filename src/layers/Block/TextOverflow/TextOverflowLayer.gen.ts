/* TypeScript file generated from TextOverflowLayer.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as TextOverflowLayerBS__Es6Import from './TextOverflowLayer.js';
const TextOverflowLayerBS: any = TextOverflowLayerBS__Es6Import;

import type {Hyphens_t as Hyphens_Hyphens_t} from '../../../../src/layers/Block/TextOverflow/Hyphens/Hyphens.gen';

import type {OverflowWrap_t as OverflowWrap_OverflowWrap_t} from '../../../../src/layers/Block/TextOverflow/OverflowWrap/OverflowWrap.gen';

import type {TextOverflow_t as TextOverflow_TextOverflow_t} from '../../../../src/layers/Block/TextOverflow/TextOverflow/TextOverflow.gen';

import type {WordBreak_t as WordBreak_WordBreak_t} from '../../../../src/layers/Block/TextOverflow/WordBreak/WordBreak.gen';

export interface ITextOverflowLayer_i {
  readonly hyphens: Hyphens_Hyphens_t; 
  readonly overflowWrap: OverflowWrap_OverflowWrap_t; 
  readonly textOverflow: TextOverflow_TextOverflow_t; 
  readonly wordBreak: WordBreak_WordBreak_t
};

export const TextOverflowLayer_resolve: (i:{
  readonly hyphens: 
    "auto"
  | "inherit"
  | "initial"
  | "manual"
  | "none"
  | "revert"
  | "unset"; 
  readonly overflowWrap: 
    "anywhere"
  | "breakWord"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "unset"; 
  readonly textOverflow: 
    "clip"
  | "ellipsis"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"; 
  readonly wordBreak: 
    "breakAll"
  | "breakWord"
  | "inherit"
  | "initial"
  | "keepAll"
  | "normal"
  | "revert"
  | "unset"
}) => string = TextOverflowLayerBS.TextOverflowLayer.resolve;

export const TextOverflowLayer: { resolve: (i:{
  readonly hyphens: 
    "auto"
  | "inherit"
  | "initial"
  | "manual"
  | "none"
  | "revert"
  | "unset"; 
  readonly overflowWrap: 
    "anywhere"
  | "breakWord"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "unset"; 
  readonly textOverflow: 
    "clip"
  | "ellipsis"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"; 
  readonly wordBreak: 
    "breakAll"
  | "breakWord"
  | "inherit"
  | "initial"
  | "keepAll"
  | "normal"
  | "revert"
  | "unset"
}) => string } = TextOverflowLayerBS.TextOverflowLayer
