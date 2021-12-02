open FontSize

@module("@vanilla-extract/css") external styleVariants: (FontSize.options, FontSize.cssResolve) => FontSize.variant = "styleVariants"

module FontSizeStyle = {
  include FontSize

  let style = styleVariants(options, (value) => {
    {
      "lineHeight": "1.2",
      "fontSize": value,
    }
  })
}
