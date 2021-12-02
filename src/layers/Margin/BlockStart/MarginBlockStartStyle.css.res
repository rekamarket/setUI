open MarginBlockStart

@module("@vanilla-extract/css") external styleVariants: (MarginBlockStart.options, MarginBlockStart.cssResolve) => MarginBlockStart.variant = "styleVariants"

module MarginBlockStartStyle = {
  include MarginBlockStart

  let style = styleVariants(options, (value) => {{ "marginBlockStart": value }})
}
