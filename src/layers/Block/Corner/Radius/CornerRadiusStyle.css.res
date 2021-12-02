open CornerRadius

@module("@vanilla-extract/css") external styleVariants: (CornerRadius.options, CornerRadius.cssResolve) => CornerRadius.variant = "styleVariants"

module CornerRadiusStyle = {
  include CornerRadius;

  let style = styleVariants(options, (value) => {{ "borderRadius": value }})
}
