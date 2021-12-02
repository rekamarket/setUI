open BorderOpacity

@module("@vanilla-extract/css") external styleVariants: (BorderOpacity.options, BorderOpacity.cssResolve) => BorderOpacity.variant = "styleVariants"

module BorderOpacityStyle = {
  include BorderOpacity;

  let style = styleVariants(options, (value) => {{ "--border-opacity": value }})
}
