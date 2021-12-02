open PaddingInlineEnd

@module("@vanilla-extract/css") external styleVariants: (PaddingInlineEnd.options, PaddingInlineEnd.cssResolve) => PaddingInlineEnd.variant = "styleVariants"

module PaddingInlineEndStyle = {
  include PaddingInlineEnd

  let style = styleVariants(options, (value) => {{ "paddingInlineEnd": value }})
}
