/* TypeScript file generated from FlexDirectionStyle.css.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as FlexDirectionStyle_cssBS__Es6Import from './FlexDirectionStyle.css.js';
const FlexDirectionStyle_cssBS: any = FlexDirectionStyle_cssBS__Es6Import;

import type {IFlexDirection_variant as IFlexDirection_FlexDirection_variant} from './FlexDirection.gen';

// tslint:disable-next-line:interface-over-type-literal
export type FlexDirectionStyle_t = 
    "row"
  | "column"
  | "rowReverse"
  | "columnReverse";

export interface IFlexDirectionStyle_i { readonly flexDirection: FlexDirectionStyle_t };

export const FlexDirectionStyle_style: IFlexDirection_FlexDirection_variant = FlexDirectionStyle_cssBS.FlexDirectionStyle.style;

export const FlexDirectionStyle_resolve: (t:
    "column"
  | "columnReverse"
  | "row"
  | "rowReverse") => string = FlexDirectionStyle_cssBS.FlexDirectionStyle.resolve;

export const FlexDirectionStyle: { resolve: (t:
    "column"
  | "columnReverse"
  | "row"
  | "rowReverse") => string; style: FlexDirection_FlexDirection_variant } = FlexDirectionStyle_cssBS.FlexDirectionStyle
