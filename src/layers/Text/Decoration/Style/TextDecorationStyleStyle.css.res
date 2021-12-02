open TextDecorationStyle

@module("@vanilla-extract/css") external styleVariants: (TextDecorationStyle.options, TextDecorationStyle.cssResolve) => TextDecorationStyle.variant = "styleVariants"

module TextDecorationStyleStyle = {
  include TextDecorationStyle

  let style = styleVariants(options, (value) => {{ "textDecorationStyle": value }})
}
