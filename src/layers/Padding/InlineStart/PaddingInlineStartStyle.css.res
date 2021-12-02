open PaddingInlineStart

@module("@vanilla-extract/css") external styleVariants: (PaddingInlineStart.options, PaddingInlineStart.cssResolve) => PaddingInlineStart.variant = "styleVariants"

module PaddingInlineStartStyle = {
  include PaddingInlineStart

  let style = styleVariants(options, (value) => {{ "paddingInlineStart": value }})
}
