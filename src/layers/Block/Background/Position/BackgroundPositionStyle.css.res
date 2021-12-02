open BackgroundPosition

@module("@vanilla-extract/css") external styleVariants: (BackgroundPosition.options, BackgroundPosition.cssResolve) => BackgroundPosition.variant = "styleVariants"

module BackgroundPositionStyle = {
  include BackgroundPosition;

  let style = styleVariants(options, (value) => {{ "backgroundPosition": value }})
}
