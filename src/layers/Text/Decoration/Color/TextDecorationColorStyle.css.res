open TextDecorationColor

@module("@vanilla-extract/css") external styleVariants: (TextDecorationColor.options, TextDecorationColor.cssResolve) => TextDecorationColor.variant = "styleVariants"

module TextDecorationColorStyle = {
  include TextDecorationColor

  let style = styleVariants(options, (value) => {{ "textDecorationColor": value }})
}
