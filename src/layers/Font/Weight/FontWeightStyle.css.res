open FontWeight

@module("@vanilla-extract/css") external styleVariants: (FontWeight.options, FontWeight.cssResolve) => FontWeight.variant = "styleVariants"

module FontWeightStyle = {
  include FontWeight

  let style = styleVariants(options, (value) => {{ "fontWeight": value }})
}
