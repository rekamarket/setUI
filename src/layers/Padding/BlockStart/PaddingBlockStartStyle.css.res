open PaddingBlockStart

@module("@vanilla-extract/css") external styleVariants: (PaddingBlockStart.options, PaddingBlockStart.cssResolve) => PaddingBlockStart.variant = "styleVariants"

module PaddingBlockStartStyle = {
  include PaddingBlockStart

  let style = styleVariants(options, (value) => {{ "paddingBlockStart": value }})
}
