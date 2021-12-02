open QuoteGap

@module("@vanilla-extract/css") external styleVariants: (QuoteGap.options, QuoteGap.cssResolve) => QuoteGap.variant = "styleVariants"

module QuoteGapStyle = {
  include QuoteGap

  let style = styleVariants(options, (value) => {{ "--quote-gap": value }})
}
