open MarkerGap

@module("@vanilla-extract/css") external styleVariants: (MarkerGap.options, MarkerGap.cssResolve) => MarkerGap.variant = "styleVariants"

module MarkerGapStyle = {
  include MarkerGap

  let style = styleVariants(options, (value) => {{ "--marker-gap": value }})
}
