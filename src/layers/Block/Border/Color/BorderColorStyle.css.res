open BorderColor

@module("@vanilla-extract/css") external styleVariants: (BorderColor.options, BorderColor.cssResolve) => BorderColor.variant = "styleVariants"

module BorderColorStyle = {
  include BorderColor;

  let style = styleVariants(options, (value) => {
    {
      "--border-hue": value["hue"],
      "--border-saturation": value["saturation"],
      "--border-lightness": value["lightness"],
      "--border-color": "hsl(var(--border-hue) var(--border-saturation) var(--border-lightness) / var(--border-opacity, 1))",
      "borderColor": "var(--border-color)",
    }
  })
}
