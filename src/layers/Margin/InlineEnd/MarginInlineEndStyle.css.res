open MarginInlineEnd

@module("@vanilla-extract/css") external styleVariants: (MarginInlineEnd.options, MarginInlineEnd.cssResolve) => MarginInlineEnd.variant = "styleVariants"

module MarginInlineEndStyle = {
  include MarginInlineEnd

  let style = styleVariants(options, (value) => {{ "marginInlineEnd": value }})
}
