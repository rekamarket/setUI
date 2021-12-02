open FontStyle

@module("@vanilla-extract/css") external styleVariants: (FontStyle.options, FontStyle.cssResolve) => FontStyle.variant = "styleVariants"

module FontStyleStyle = {
  include FontStyle

  let style = styleVariants(options, (value) => {{ "fontStyle": value }})
}
