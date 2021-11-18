/* TypeScript file generated from FlexDirection.css.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as FlexDirection_cssBS__Es6Import from './FlexDirection.css.js';
const FlexDirection_cssBS: any = FlexDirection_cssBS__Es6Import;

export interface Ivariant {
  readonly row: string; 
  readonly rowReverse: string; 
  readonly column: string; 
  readonly columnReverse: string
};

// tslint:disable-next-line:interface-over-type-literal
export type FlexDirection_t = 
    "row"
  | "rowReverse"
  | "column"
  | "columnReverse";

export const FlexDirection_style: Ivariant = FlexDirection_cssBS.FlexDirection.style;

export const FlexDirection_resolve: (t:
    "column"
  | "columnReverse"
  | "row"
  | "rowReverse") => string = FlexDirection_cssBS.FlexDirection.resolve;

export const FlexDirection: { resolve: (t:
    "column"
  | "columnReverse"
  | "row"
  | "rowReverse") => string; style: variant } = FlexDirection_cssBS.FlexDirection
