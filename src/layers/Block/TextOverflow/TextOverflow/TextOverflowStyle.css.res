open TextOverflow

@module("@vanilla-extract/css") external styleVariants: (TextOverflow.options, TextOverflow.cssResolve) => TextOverflow.variant = "styleVariants"

module TextOverflowStyle = {
  include TextOverflow

  let style = styleVariants(options, (value) => {{ "textOverflow": value }})
}
