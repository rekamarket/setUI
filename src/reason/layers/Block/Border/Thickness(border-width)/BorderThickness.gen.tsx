/* TypeScript file generated from BorderThickness.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as BorderThicknessBS__Es6Import from './BorderThickness.js';
const BorderThicknessBS: any = BorderThicknessBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type BorderThickness_t = "none" | "thin" | "light" | "medium" | "bold";

export interface IBorderThickness_i { readonly borderThickness: BorderThickness_t };

export const BorderThickness_initial: "none" = BorderThicknessBS.BorderThickness.initial;

export const BorderThickness_options: {
  readonly bold: string; 
  readonly light: string; 
  readonly medium: string; 
  readonly none: string; 
  readonly thin: string
} = BorderThicknessBS.BorderThickness.options;

export const BorderThickness: { options: {
  readonly bold: string; 
  readonly light: string; 
  readonly medium: string; 
  readonly none: string; 
  readonly thin: string
}; initial: "none" } = BorderThicknessBS.BorderThickness
