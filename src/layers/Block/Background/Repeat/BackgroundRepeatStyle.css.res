open BackgroundRepeat

@module("@vanilla-extract/css") external styleVariants: (BackgroundRepeat.options, BackgroundRepeat.cssResolve) => BackgroundRepeat.variant = "styleVariants"

module BackgroundRepeatStyle = {
  include BackgroundRepeat;

  let style = styleVariants(options, (value) => {{ "backgroundRepeat": value }})
}
