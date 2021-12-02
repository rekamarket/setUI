open BackgroundOpacity

@module("@vanilla-extract/css") external styleVariants: (BackgroundOpacity.options, BackgroundOpacity.cssResolve) => BackgroundOpacity.variant = "styleVariants"

module BackgroundOpacityStyle = {
  include BackgroundOpacity;

  let style = styleVariants(options, (value) => {{ "--background-opacity": value }})
}
