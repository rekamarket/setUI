open QuotePosition

@module("@vanilla-extract/css") external styleVariants: (QuotePosition.options, QuotePosition.cssResolve) => QuotePosition.variant = "styleVariants"

module QuotePositionStyle = {
  include QuotePosition

  let style = styleVariants(options, (value) => {{ "--quote-position": value }})
}
