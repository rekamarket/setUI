open PaddingBlockEnd

@module("@vanilla-extract/css") external styleVariants: (PaddingBlockEnd.options, PaddingBlockEnd.cssResolve) => PaddingBlockEnd.variant = "styleVariants"

module PaddingBlockEndStyle = {
  include PaddingBlockEnd

  let style = styleVariants(options, (value) => {{ "paddingBlockEnd": value }})
}
