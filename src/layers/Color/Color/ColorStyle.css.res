open Color

@module("@vanilla-extract/css") external styleVariants: (Color.options, Color.cssResolve) => Color.variant = "styleVariants"

module ColorStyle = {
  include Color;

  let style = styleVariants(options, (value) => {{ "color": value }})
}
