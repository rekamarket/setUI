open ThemeColor

@module("@vanilla-extract/css") external styleVariants: (ThemeColor.options, ThemeColor.cssResolve) => ThemeColor.variant = "styleVariants"

module ThemeColorStyle = {
  include ThemeColor;

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
