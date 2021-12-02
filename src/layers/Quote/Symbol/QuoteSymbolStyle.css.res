open QuoteSymbol

@module("@vanilla-extract/css") external styleVariants: (QuoteSymbol.options, QuoteSymbol.cssResolve) => QuoteSymbol.variant = "styleVariants"

module QuoteSymbolStyle = {
  include QuoteSymbol

  let style = styleVariants(options, (value) => {{ "--quote-symbol": value }})
}
