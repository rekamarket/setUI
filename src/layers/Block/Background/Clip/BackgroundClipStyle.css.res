open BackgroundClip

@module("@vanilla-extract/css") external styleVariants: (BackgroundClip.options, BackgroundClip.cssResolve) => BackgroundClip.variant = "styleVariants"

module BackgroundClipStyle = {
  include BackgroundClip;

  let style = styleVariants(options, (value) => {{ "backgroundClip": value }})
}
