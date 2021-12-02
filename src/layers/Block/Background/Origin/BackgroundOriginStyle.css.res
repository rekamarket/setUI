open BackgroundOrigin

@module("@vanilla-extract/css") external styleVariants: (BackgroundOrigin.options, BackgroundOrigin.cssResolve) => BackgroundOrigin.variant = "styleVariants"

module BackgroundOriginStyle = {
  include BackgroundOrigin;

  let style = styleVariants(options, (value) => {{ "backgroundOrigin": value }})
}
