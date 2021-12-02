import { style, globalStyle } from '@vanilla-extract/css'
import { MaxInlineSizeByCharacters } from 'layers/MaxInlineSize/MaxInlineSizeByCharacters/MaxInlineSizeByCharacters'

export const ClassName = style({
  display: 'grid',
  gridTemplateColumns: `1fr min(var(--max-inline-size-by-characters, ${MaxInlineSizeByCharacters.options.medium}), 100%) 1fr`,
})

globalStyle(`${ClassName} > *`, {
  gridColumn: 2,
})
