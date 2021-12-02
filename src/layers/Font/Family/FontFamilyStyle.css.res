open FontFamily

@module("@vanilla-extract/css") external styleVariants: (FontFamily.options, FontFamily.cssResolve) => FontFamily.variant = "styleVariants"

module FontFamilyStyle = {
  include FontFamily

  let style = styleVariants(options, (value) => {{ "fontFamily": value }})
}
