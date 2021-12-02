open OverlayColor

@module("@vanilla-extract/css") external styleVariants: (OverlayColor.options, OverlayColor.cssResolve) => OverlayColor.variant = "styleVariants"

module OverlayColorStyle = {
  include OverlayColor;

  let style = styleVariants(options, (value) => {{ "--overlay-color": value }})
}
