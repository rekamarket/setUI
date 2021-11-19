/* TypeScript file generated from Gap.css.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Gap_cssBS__Es6Import from './Gap.css.js';
const Gap_cssBS: any = Gap_cssBS__Es6Import;

export interface Ivariant {
  readonly none: string; 
  readonly xxxsmall: string; 
  readonly xxsmall: string; 
  readonly xsmall: string; 
  readonly small: string; 
  readonly medium: string; 
  readonly large: string; 
  readonly xlarge: string; 
  readonly xxlarge: string; 
  readonly xxxlarge: string
};

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

export const Gap_style: Ivariant = Gap_cssBS.Gap.style;

export const Gap_resolve: (t:
    "large"
  | "medium"
  | "none"
  | "small"
  | "xlarge"
  | "xsmall"
  | "xxlarge"
  | "xxsmall"
  | "xxxlarge"
  | "xxxsmall") => string = Gap_cssBS.Gap.resolve;

export const Gap: { resolve: (t:
    "large"
  | "medium"
  | "none"
  | "small"
  | "xlarge"
  | "xsmall"
  | "xxlarge"
  | "xxsmall"
  | "xxxlarge"
  | "xxxsmall") => string; style: variant } = Gap_cssBS.Gap
