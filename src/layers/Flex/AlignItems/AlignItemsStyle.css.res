open AlignItems

@module("@vanilla-extract/css") external styleVariants: (AlignItems.options, AlignItems.cssResolve) => AlignItems.variant = "styleVariants"

module AlignItemsStyle = {
  include AlignItems

  let style = styleVariants(options, (value) => {{ "alignItems": value }})
}
