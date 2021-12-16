open InteractiveColor

@module("@vanilla-extract/css") external styleVariants: (InteractiveColor.options, InteractiveColor.cssResolve) => InteractiveColor.variant = "styleVariants"

module InteractiveColorStyle = {
  include InteractiveColor;

  let style = styleVariants(options, (value) => {
    {
      "--h": value["hue"],
      "--s": value["saturation"],
      "--l": value["lightness"],
      "--a": value["alpha"],
      "--color": "hsl(var(--h) var(--s) var(--l) / var(--a))",
      "--text-color": value["textColor"],
    }
  })
}
