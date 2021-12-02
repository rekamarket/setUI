open TextTransform

@module("@vanilla-extract/css") external styleVariants: (TextTransform.options, TextTransform.cssResolve) => TextTransform.variant = "styleVariants"

module TextTransformStyle = {
  include TextTransform

  let style = styleVariants(options, (value) => {{ "textTransform": value }})
}
