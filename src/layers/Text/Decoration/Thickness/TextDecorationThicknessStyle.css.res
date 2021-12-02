open TextDecorationThickness

@module("@vanilla-extract/css") external styleVariants: (TextDecorationThickness.options, TextDecorationThickness.cssResolve) => TextDecorationThickness.variant = "styleVariants"

module TextDecorationThicknessStyle = {
  include TextDecorationThickness

  let style = styleVariants(options, (value) => {{ "textDecorationThickness": value }})
}
