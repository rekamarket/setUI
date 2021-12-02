open TextDecorationLine

@module("@vanilla-extract/css") external styleVariants: (TextDecorationLine.options, TextDecorationLine.cssResolve) => TextDecorationLine.variant = "styleVariants"

module TextDecorationLineStyle = {
  include TextDecorationLine

  let style = styleVariants(options, (value) => {{ "textDecorationLine": value }})
}
