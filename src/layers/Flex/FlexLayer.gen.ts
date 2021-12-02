/* TypeScript file generated from FlexLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as FlexLayerBS__Es6Import from './FlexLayer.js'
const FlexLayerBS: any = FlexLayerBS__Es6Import

import type { AlignContent_t as AlignContent_AlignContent_t } from '../../../src/layers/Flex/AlignContent/AlignContent.gen'

import type { AlignItems_t as AlignItems_AlignItems_t } from '../../../src/layers/Flex/AlignItems/AlignItems.gen'

import type { FlexDirection_t as FlexDirection_FlexDirection_t } from '../../../src/layers/Flex/FlexDirection/FlexDirection.gen'

import type { FlexWrap_t as FlexWrap_FlexWrap_t } from '../../../src/layers/Flex/FlexWrap/FlexWrap.gen'

import type { Gap_t as Gap_Gap_t } from '../../../src/layers/Flex/Gap/Gap.gen'

import type { JustifyContent_t as JustifyContent_JustifyContent_t } from '../../../src/layers/Flex/JustifyContent/JustifyContent.gen'

export interface IFlexLayer_i {
  readonly alignContent: AlignContent_AlignContent_t
  readonly alignItems: AlignItems_AlignItems_t
  readonly flexDirection: FlexDirection_FlexDirection_t
  readonly flexWrap: FlexWrap_FlexWrap_t
  readonly gap: Gap_Gap_t
  readonly justifyContent: JustifyContent_JustifyContent_t
}

export const FlexLayer_resolve: (i: {
  readonly alignContent:
    | 'baseline'
    | 'center'
    | 'end'
    | 'firstBaseline'
    | 'flexEnd'
    | 'flexStart'
    | 'lastBaseline'
    | 'normal'
    | 'safeCenter'
    | 'spaceAround'
    | 'spaceBetween'
    | 'spaceEvenly'
    | 'start'
    | 'stretch'
    | 'unsafeCenter'
    | 'unset'
  readonly alignItems:
    | 'baseline'
    | 'center'
    | 'end'
    | 'firstBaseline'
    | 'flexEnd'
    | 'flexStart'
    | 'lastBaseline'
    | 'normal'
    | 'safeCenter'
    | 'start'
    | 'stretch'
    | 'unsafeCenter'
    | 'unset'
  readonly flexDirection: 'column' | 'columnReverse' | 'row' | 'rowReverse'
  readonly flexWrap: 'nowrap' | 'wrap' | 'wrapReverse'
  readonly gap:
    | 'large'
    | 'medium'
    | 'none'
    | 'small'
    | 'xlarge'
    | 'xsmall'
    | 'xxlarge'
    | 'xxsmall'
    | 'xxxlarge'
    | 'xxxsmall'
  readonly justifyContent:
    | 'center'
    | 'end'
    | 'flexEnd'
    | 'flexStart'
    | 'left'
    | 'normal'
    | 'right'
    | 'safeCenter'
    | 'spaceAround'
    | 'spaceBetween'
    | 'spaceEvenly'
    | 'start'
    | 'stretch'
    | 'unsafeCenter'
}) => string = FlexLayerBS.FlexLayer.resolve

export const FlexLayer: {
  resolve: (i: {
    readonly alignContent:
      | 'baseline'
      | 'center'
      | 'end'
      | 'firstBaseline'
      | 'flexEnd'
      | 'flexStart'
      | 'lastBaseline'
      | 'normal'
      | 'safeCenter'
      | 'spaceAround'
      | 'spaceBetween'
      | 'spaceEvenly'
      | 'start'
      | 'stretch'
      | 'unsafeCenter'
      | 'unset'
    readonly alignItems:
      | 'baseline'
      | 'center'
      | 'end'
      | 'firstBaseline'
      | 'flexEnd'
      | 'flexStart'
      | 'lastBaseline'
      | 'normal'
      | 'safeCenter'
      | 'start'
      | 'stretch'
      | 'unsafeCenter'
      | 'unset'
    readonly flexDirection: 'column' | 'columnReverse' | 'row' | 'rowReverse'
    readonly flexWrap: 'nowrap' | 'wrap' | 'wrapReverse'
    readonly gap:
      | 'large'
      | 'medium'
      | 'none'
      | 'small'
      | 'xlarge'
      | 'xsmall'
      | 'xxlarge'
      | 'xxsmall'
      | 'xxxlarge'
      | 'xxxsmall'
    readonly justifyContent:
      | 'center'
      | 'end'
      | 'flexEnd'
      | 'flexStart'
      | 'left'
      | 'normal'
      | 'right'
      | 'safeCenter'
      | 'spaceAround'
      | 'spaceBetween'
      | 'spaceEvenly'
      | 'start'
      | 'stretch'
      | 'unsafeCenter'
  }) => string
} = FlexLayerBS.FlexLayer
