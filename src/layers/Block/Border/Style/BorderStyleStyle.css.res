open BorderStyle

@module("@vanilla-extract/css") external styleVariants: (BorderStyle.options, BorderStyle.cssResolve) => BorderStyle.variant = "styleVariants"

module BorderStyleStyle = {
  include BorderStyle;

  let style = styleVariants(options, (value) => {{ "borderStyle": value }})
}
