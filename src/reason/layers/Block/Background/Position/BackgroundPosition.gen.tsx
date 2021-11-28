/* TypeScript file generated from BackgroundPosition.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as BackgroundPositionBS__Es6Import from './BackgroundPosition.js';
const BackgroundPositionBS: any = BackgroundPositionBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type BackgroundPosition_t = 
    "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

export interface IBackgroundPosition_i { readonly backgroundPosition: BackgroundPosition_t };

export const BackgroundPosition_initial: "center" = BackgroundPositionBS.BackgroundPosition.initial;

export const BackgroundPosition_options: {
  readonly bottom: string; 
  readonly center: string; 
  readonly inherit: string; 
  readonly initial: string; 
  readonly left: string; 
  readonly revert: string; 
  readonly right: string; 
  readonly top: string; 
  readonly unset: string
} = BackgroundPositionBS.BackgroundPosition.options;

export const BackgroundPosition: { options: {
  readonly bottom: string; 
  readonly center: string; 
  readonly inherit: string; 
  readonly initial: string; 
  readonly left: string; 
  readonly revert: string; 
  readonly right: string; 
  readonly top: string; 
  readonly unset: string
}; initial: "center" } = BackgroundPositionBS.BackgroundPosition
