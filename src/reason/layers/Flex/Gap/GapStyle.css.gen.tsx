/* TypeScript file generated from GapStyle.css.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as GapStyle_cssBS__Es6Import from './GapStyle.css.js';
const GapStyle_cssBS: any = GapStyle_cssBS__Es6Import;

import type {IGap_variant as IGap_Gap_variant} from './Gap.gen';

// tslint:disable-next-line:interface-over-type-literal
export type GapStyle_t = 
    "none"
  | "xxxlarge"
  | "small"
  | "xxxsmall"
  | "xxsmall"
  | "xlarge"
  | "medium"
  | "xxlarge"
  | "large"
  | "xsmall";

export interface IGapStyle_i { readonly gap: GapStyle_t };

export const GapStyle_style: IGap_Gap_variant = GapStyle_cssBS.GapStyle.style;

export const GapStyle_resolve: (t:
    "large"
  | "medium"
  | "none"
  | "small"
  | "xlarge"
  | "xsmall"
  | "xxlarge"
  | "xxsmall"
  | "xxxlarge"
  | "xxxsmall") => string = GapStyle_cssBS.GapStyle.resolve;

export const GapStyle: { resolve: (t:
    "large"
  | "medium"
  | "none"
  | "small"
  | "xlarge"
  | "xsmall"
  | "xxlarge"
  | "xxsmall"
  | "xxxlarge"
  | "xxxsmall") => string; style: Gap_Gap_variant } = GapStyle_cssBS.GapStyle
