/* TypeScript file generated from FlexDirection.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as FlexDirectionBS__Es6Import from './FlexDirection.js';
const FlexDirectionBS: any = FlexDirectionBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type FlexDirection_t = 
    "row"
  | "rowReverse"
  | "column"
  | "columnReverse";

export interface IFlexDirection_i { readonly flexDirection: FlexDirection_t };

export const FlexDirection_initial: "row" = FlexDirectionBS.FlexDirection.initial;

export const FlexDirection_options: {
  readonly column: string; 
  readonly columnReverse: string; 
  readonly row: string; 
  readonly rowReverse: string
} = FlexDirectionBS.FlexDirection.options;

export const FlexDirection: { options: {
  readonly column: string; 
  readonly columnReverse: string; 
  readonly row: string; 
  readonly rowReverse: string
}; initial: "row" } = FlexDirectionBS.FlexDirection
