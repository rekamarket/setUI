open QuoteSize

@module("@vanilla-extract/css") external styleVariants: (QuoteSize.options, QuoteSize.cssResolve) => QuoteSize.variant = "styleVariants"

module QuoteSizeStyle = {
  include QuoteSize

  let style = styleVariants(options, (value) => {{ "--quote-size": value }})
}
