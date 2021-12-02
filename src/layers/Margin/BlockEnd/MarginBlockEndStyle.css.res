open MarginBlockEnd

@module("@vanilla-extract/css") external styleVariants: (MarginBlockEnd.options, MarginBlockEnd.cssResolve) => MarginBlockEnd.variant = "styleVariants"

module MarginBlockEndStyle = {
  include MarginBlockEnd

  let style = styleVariants(options, (value) => {{ "marginBlockEnd": value }})
}
