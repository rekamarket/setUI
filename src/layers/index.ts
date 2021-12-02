import { createContext, useContext } from 'react'

// color
export { ColorLayer_resolve as ColorLayer } from './Color/ColorLayer.gen'
export type { IColorLayer_i as IColorLayer } from './Color/ColorLayer.gen'

// block
export { BackgroundLayer_resolve as BackgroundLayer } from './Block/Background/BackgroundLayer.gen'
export type { IBackgroundLayer_i as IBackgroundLayer } from './Block/Background/BackgroundLayer.gen'
export { BorderLayer_resolve as BorderLayer } from './Block/Border/BorderLayer.gen'
export type { IBorderLayer_i as IBorderLayer } from './Block/Border/BorderLayer.gen'
export { ContentLayer_resolve as ContentLayer } from './Block/Content/ContentLayer.gen'
export type { IContentLayer_i as IContentLayer } from './Block/Content/ContentLayer.gen'
export { CornerLayer_resolve as CornerLayer } from './Block/Corner/CornerLayer.gen'
export type { ICornerLayer_i as ICornerLayer } from './Block/Corner/CornerLayer.gen'

// margin
export { MarginLayer_resolve as MarginLayer } from './Margin/MarginLayer.gen'
export type { IMarginLayer_i as IMarginLayer } from './Margin/MarginLayer.gen'

// padding
export { PaddingLayer_resolve as PaddingLayer } from './Padding/PaddingLayer.gen'
export type { IPaddingLayer_i as IPaddingLayer } from './Padding/PaddingLayer.gen'
export { PaddingInlineLayer_resolve as PaddingInlineLayer } from './Padding/PaddingInlineLayer.gen'
export type { IPaddingInlineLayer_i as IPaddingInlineLayer } from './Padding/PaddingInlineLayer.gen'

// flex
export { FlexLayer_resolve as FlexLayer } from './Flex/FlexLayer.gen'
export type { IFlexLayer_i as IFlexLayer } from './Flex/FlexLayer.gen'

// marker
export { MarkerLayer_resolve as MarkerLayer } from './Marker/MarkerLayer.gen'
export type { IMarkerLayer_i as IMarkerLayer } from './Marker/MarkerLayer.gen'

// maxInlineSize
export { MaxInlineSizeByCharactersLayer_resolve as MaxInlineSizeByCharactersLayer } from './MaxInlineSize/MaxInlineSizeByCharactersLayer.gen'
export type { IMaxInlineSizeByCharactersLayer_i as IMaxInlineSizeByCharactersLayer } from './MaxInlineSize/MaxInlineSizeByCharactersLayer.gen'

// overlay
export { OverlayLayer_resolve as OverlayLayer } from './Overlay/OverlayLayer.gen'
export type { IOverlayLayer_i as IOverlayLayer } from './Overlay/OverlayLayer.gen'

// quote
export { QuoteLayer_resolve as QuoteLayer } from './Quote/QuoteLayer.gen'
export type { IQuoteLayer_i as IQuoteLayer } from './Quote/QuoteLayer.gen'

// charsPerLine
export { CharsPerLineLayer_resolve as CharsPerLineLayer } from './Text/CharsPerLine/CharsPerLineLayer.gen'
export type { ICharsPerLineLayer_i as ICharsPerLineLayer } from './Text/CharsPerLine/CharsPerLineLayer.gen'

// font
export { FontLayer_resolve as FontLayer } from './Font/FontLayer.gen'
export type { IFontLayer_i as IFontLayer } from './Font/FontLayer.gen'

// text
export { TextDecorationLayer_resolve as TextDecorationLayer } from './Text/Decoration/TextDecorationLayer.gen'
export type { ITextDecorationLayer_i as ITextDecorationLayer } from './Text/Decoration/TextDecorationLayer.gen'
export { TextTransformLayer_resolve as TextTransformLayer } from './Text/Transform/TextTransformLayer.gen'
export type { ITextTransformLayer_i as ITextTransformLayer } from './Text/Transform/TextTransformLayer.gen'

// context
export const FontSizeContext = createContext(undefined)
export const useFontSize = () => useContext(FontSizeContext)

export const ColorContext = createContext(undefined)
export const useColor = () => useContext(ColorContext)
