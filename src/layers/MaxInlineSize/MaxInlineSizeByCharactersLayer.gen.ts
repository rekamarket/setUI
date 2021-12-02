/* TypeScript file generated from MaxInlineSizeByCharactersLayer.res by genType. */
/* eslint-disable import/first */

// @ts-ignore: Implicit any on import
import * as MaxInlineSizeByCharactersLayerBS__Es6Import from './MaxInlineSizeByCharactersLayer.js'
const MaxInlineSizeByCharactersLayerBS: any =
  MaxInlineSizeByCharactersLayerBS__Es6Import

import type { MaxInlineSizeByCharacters_t as MaxInlineSizeByCharacters_MaxInlineSizeByCharacters_t } from '../../../src/layers/MaxInlineSize/MaxInlineSizeByCharacters/MaxInlineSizeByCharacters.gen'

export interface IMaxInlineSizeByCharactersLayer_i {
  readonly maxInlineSize: MaxInlineSizeByCharacters_MaxInlineSizeByCharacters_t
}

export const MaxInlineSizeByCharactersLayer_resolve: (i: {
  readonly maxInlineSize: 'large' | 'medium' | 'none' | 'small'
}) => string =
  MaxInlineSizeByCharactersLayerBS.MaxInlineSizeByCharactersLayer.resolve

export const MaxInlineSizeByCharactersLayer: {
  resolve: (i: {
    readonly maxInlineSize: 'large' | 'medium' | 'none' | 'small'
  }) => string
} = MaxInlineSizeByCharactersLayerBS.MaxInlineSizeByCharactersLayer
