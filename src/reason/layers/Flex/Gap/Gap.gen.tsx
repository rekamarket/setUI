/* TypeScript file generated from Gap.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as GapBS__Es6Import from './Gap.js';
const GapBS: any = GapBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type Gap_t = 
    "none"
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

export interface IGap_i { readonly gap: Gap_t };

export const Gap_options: {
  readonly large: number; 
  readonly medium: number; 
  readonly none: number; 
  readonly small: number; 
  readonly xlarge: number; 
  readonly xsmall: number; 
  readonly xxlarge: number; 
  readonly xxsmall: number; 
  readonly xxxlarge: number; 
  readonly xxxsmall: number
} = GapBS.Gap.options;

export const Gap: { options: {
  readonly large: number; 
  readonly medium: number; 
  readonly none: number; 
  readonly small: number; 
  readonly xlarge: number; 
  readonly xsmall: number; 
  readonly xxlarge: number; 
  readonly xxsmall: number; 
  readonly xxxlarge: number; 
  readonly xxxsmall: number
} } = GapBS.Gap
