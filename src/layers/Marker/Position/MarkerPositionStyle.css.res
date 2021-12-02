open MarkerPosition

@module("@vanilla-extract/css") external styleVariants: (MarkerPosition.options, MarkerPosition.cssResolve) => MarkerPosition.variant = "styleVariants"

module MarkerPositionStyle = {
  include MarkerPosition

  let style = styleVariants(options, (value) => {{ "listStylePosition": value }})
}
