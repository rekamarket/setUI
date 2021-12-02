open BackgroundSize

@module("@vanilla-extract/css") external styleVariants: (BackgroundSize.options, BackgroundSize.cssResolve) => BackgroundSize.variant = "styleVariants"

module BackgroundSizeStyle = {
  include BackgroundSize;

  let style = styleVariants(options, (value) => {{ "backgroundSize": value }})
}
