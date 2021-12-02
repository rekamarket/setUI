open MarginInlineStart

@module("@vanilla-extract/css") external styleVariants: (MarginInlineStart.options, MarginInlineStart.cssResolve) => MarginInlineStart.variant = "styleVariants"

module MarginInlineStartStyle = {
  include MarginInlineStart

  let style = styleVariants(options, (value) => {{ "marginInlineStart": value }})
}
