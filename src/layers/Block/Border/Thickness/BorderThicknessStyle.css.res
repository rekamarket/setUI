open BorderThickness

@module("@vanilla-extract/css") external styleVariants: (BorderThickness.options, BorderThickness.cssResolve) => BorderThickness.variant = "styleVariants"

module BorderThicknessStyle = {
  include BorderThickness;

  let style = styleVariants(options, (value) => {{ "borderWidth": value }})
}
