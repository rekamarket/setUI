open Gap

@module("@vanilla-extract/css") external styleVariants: (Gap.options, Gap.cssResolve) => Gap.variant = "styleVariants"

module GapStyle = {
  include Gap

  let style = styleVariants(options, (value) => {{ "gap": value }})
}
