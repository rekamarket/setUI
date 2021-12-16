open InteractiveSize

@module("@vanilla-extract/css") external styleVariants: (InteractiveSize.options, InteractiveSize.cssResolve) => InteractiveSize.variant = "styleVariants"

module InteractiveSizeStyle = {
  include InteractiveSize;

  let style = styleVariants(options, (value) => {
    {
      "paddingBlock": value["paddingBlock"],
      "paddingInline": value["paddingInline"],
      "fontSize": value["fontSize"],
      "borderRadius": value["borderRadius"],
      "borderWidth": value["borderWidth"],
      "outlineWidth": value["outlineWidth"],
      "outlineOffset": value["outlineOffset"],
    }
  })
}
