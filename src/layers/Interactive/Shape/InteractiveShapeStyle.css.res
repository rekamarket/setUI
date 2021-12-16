open InteractiveShape

@module("@vanilla-extract/css") external styleVariants: (InteractiveShape.options, InteractiveShape.cssResolve) => InteractiveShape.variant = "styleVariants"

module InteractiveShapeStyle = {
  include InteractiveShape;

  let style = styleVariants(options, (value) => {
    {
      "height": value["height"],
      "minHeight": value["minHeight"],
      "maxHeight": value["maxHeight"],
      "width": value["width"],
      "minWidth": value["minWidth"],
      "maxWidth": value["maxWidth"],
    }
  })
}
