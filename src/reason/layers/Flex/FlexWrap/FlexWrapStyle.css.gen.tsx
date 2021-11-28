/* TypeScript file generated from FlexWrapStyle.css.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as FlexWrapStyle_cssBS__Es6Import from './FlexWrapStyle.css.js';
const FlexWrapStyle_cssBS: any = FlexWrapStyle_cssBS__Es6Import;

import type {IFlexWrap_variant as IFlexWrap_FlexWrap_variant} from './FlexWrap.gen';

// tslint:disable-next-line:interface-over-type-literal
export type FlexWrapStyle_t = "wrapReverse" | "nowrap" | "wrap";

export interface IFlexWrapStyle_i { readonly flexWrap: FlexWrapStyle_t };

export const FlexWrapStyle_style: IFlexWrap_FlexWrap_variant = FlexWrapStyle_cssBS.FlexWrapStyle.style;

export const FlexWrapStyle_resolve: (t:"nowrap" | "wrap" | "wrapReverse") => string = FlexWrapStyle_cssBS.FlexWrapStyle.resolve;

export const FlexWrapStyle: { resolve: (t:"nowrap" | "wrap" | "wrapReverse") => string; style: FlexWrap_FlexWrap_variant } = FlexWrapStyle_cssBS.FlexWrapStyle
