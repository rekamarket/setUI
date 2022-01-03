open OverflowWrap

@module("@vanilla-extract/css") external styleVariants: (OverflowWrap.options, OverflowWrap.cssResolve) => OverflowWrap.variant = "styleVariants"

module OverflowWrapStyle = {
  include OverflowWrap

  let style = styleVariants(options, (value) => {{ "overflowWrap": value }})
}
