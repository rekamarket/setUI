open FlexDirection

@module("@vanilla-extract/css") external styleVariants: (FlexDirection.options, FlexDirection.cssResolve) => FlexDirection.variant = "styleVariants"

module FlexDirectionStyle = {
  include FlexDirection

  let style = styleVariants(options, (value) => {{ "flexDirection": value }})
}
