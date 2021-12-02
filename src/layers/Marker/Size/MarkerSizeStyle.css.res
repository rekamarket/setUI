open MarkerSize

@module("@vanilla-extract/css") external styleVariants: (MarkerSize.options, MarkerSize.cssResolve) => MarkerSize.variant = "styleVariants"

module MarkerSizeStyle = {
  include MarkerSize

  let style = styleVariants(options, (value) => {{ "--marker-size": value }})
}
