open JustifyContent

@module("@vanilla-extract/css") external styleVariants: (JustifyContent.options, JustifyContent.cssResolve) => JustifyContent.variant = "styleVariants"

module JustifyContentStyle = {
  include JustifyContent

  let style = styleVariants(options, (value) => {{ "justifyContent": value }})
}
