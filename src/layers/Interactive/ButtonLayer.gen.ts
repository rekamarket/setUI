/* TypeScript file generated from ButtonLayer.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as ButtonLayerBS__Es6Import from './ButtonLayer.js';
const ButtonLayerBS: any = ButtonLayerBS__Es6Import;

import type {ButtonVariant_t as ButtonVariant_ButtonVariant_t} from '../../../src/layers/Interactive/Variant/Button/ButtonVariant.gen';

import type {InteractiveColor_t as InteractiveColor_InteractiveColor_t} from '../../../src/layers/Color/Interactive/InteractiveColor.gen';

import type {InteractiveSize_t as InteractiveSize_InteractiveSize_t} from '../../../src/layers/Interactive/Size/InteractiveSize.gen';

export interface IButtonLayer_i {
  readonly color: InteractiveColor_InteractiveColor_t; 
  readonly size: InteractiveSize_InteractiveSize_t; 
  readonly variant: ButtonVariant_ButtonVariant_t
};

export const ButtonLayer_resolve: (i:{
  readonly color: 
    "black"
  | "primary"
  | "secondary"
  | "white"; 
  readonly size: 
    "large"
  | "medium"
  | "small"
  | "xlarge"
  | "xsmall"; 
  readonly variant: 
    "borderless"
  | "ghost"
  | "solid"
  | "text"
}) => string = ButtonLayerBS.ButtonLayer.resolve;

export const ButtonLayer: { resolve: (i:{
  readonly color: 
    "black"
  | "primary"
  | "secondary"
  | "white"; 
  readonly size: 
    "large"
  | "medium"
  | "small"
  | "xlarge"
  | "xsmall"; 
  readonly variant: 
    "borderless"
  | "ghost"
  | "solid"
  | "text"
}) => string } = ButtonLayerBS.ButtonLayer
