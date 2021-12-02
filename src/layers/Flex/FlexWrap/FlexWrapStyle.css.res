open FlexWrap

@module("@vanilla-extract/css") external styleVariants: (FlexWrap.options, FlexWrap.cssResolve) => FlexWrap.variant = "styleVariants"

module FlexWrapStyle = {
  include FlexWrap

  let style = styleVariants(options, (value) => {{ "flexWrap": value }})
}
