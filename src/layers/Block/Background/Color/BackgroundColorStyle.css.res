open BackgroundColor

@module("@vanilla-extract/css") external styleVariants: (BackgroundColor.options, BackgroundColor.cssResolve) => BackgroundColor.variant = "styleVariants"

module BackgroundColorStyle = {
  include BackgroundColor;

  let style = styleVariants(options, (value) => {
    {
      "--background-hue": value["hue"],
      "--background-saturation": value["saturation"],
      "--background-lightness": value["lightness"],
      "--background-color": "hsl(var(--background-hue) var(--background-saturation) var(--background-lightness) / var(--background-opacity, 1))",
      "backgroundColor": "var(--background-color)",
    }
  })
}
