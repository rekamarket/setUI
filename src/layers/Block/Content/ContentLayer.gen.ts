/* TypeScript file generated from ContentLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as ContentLayerBS__Es6Import from './ContentLayer.js'
const ContentLayerBS: any = ContentLayerBS__Es6Import

import type { ContentAlign_t as ContentAlign_ContentAlign_t } from '../../../../src/layers/Block/Content/Align/ContentAlign.gen'

export interface IContentLayer_i {
  readonly contentAlign: ContentAlign_ContentAlign_t
}

export const ContentLayer_resolve: (i: {
  readonly contentAlign:
    | 'center'
    | 'dot'
    | 'dotCenter'
    | 'end'
    | 'inherit'
    | 'initial'
    | 'justify'
    | 'justifyAll'
    | 'left'
    | 'matchParent'
    | 'right'
    | 'start'
    | 'unset'
}) => string = ContentLayerBS.ContentLayer.resolve

export const ContentLayer: {
  resolve: (i: {
    readonly contentAlign:
      | 'center'
      | 'dot'
      | 'dotCenter'
      | 'end'
      | 'inherit'
      | 'initial'
      | 'justify'
      | 'justifyAll'
      | 'left'
      | 'matchParent'
      | 'right'
      | 'start'
      | 'unset'
  }) => string
} = ContentLayerBS.ContentLayer
