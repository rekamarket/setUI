/* TypeScript file generated from TextTransformLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as TextTransformLayerBS__Es6Import from './TextTransformLayer.js'
const TextTransformLayerBS: any = TextTransformLayerBS__Es6Import

import type { TextTransform_t as TextTransform_TextTransform_t } from '../../../../src/layers/Text/Transform/Transform/TextTransform.gen'

export interface ITextTransformLayer_i {
  readonly textTransform: TextTransform_TextTransform_t
}

export const TextTransformLayer_resolve: (i: {
  readonly textTransform:
    | 'capitalize'
    | 'fullSizeKana'
    | 'fullWidth'
    | 'lowercase'
    | 'none'
    | 'uppercase'
}) => string = TextTransformLayerBS.TextTransformLayer.resolve

export const TextTransformLayer: {
  resolve: (i: {
    readonly textTransform:
      | 'capitalize'
      | 'fullSizeKana'
      | 'fullWidth'
      | 'lowercase'
      | 'none'
      | 'uppercase'
  }) => string
} = TextTransformLayerBS.TextTransformLayer
